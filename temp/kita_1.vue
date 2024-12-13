<script setup lang="ts">

// Define the structure for an entry in the timetable
interface TimetableEntry {
  date: string;           // The date of the entry
  uniperiod: string;     // The uniperiod
  subjectid: string;     // The subject ID
  groupnames: string;    // Group names
  teacherids: string;    // Teacher IDs
  classroomids: string;  // Classroom IDs
  type: string;

  starttime: string;
  endtime: string;

  classids: string[];

  igroupid: string;

  colors: string[];


  dayname: string;       // The name of the day
}

// Define the structure for a timetable on a specific weekday
interface WeekdayTimetable {
  weekday: string;      // The date for the weekday timetable
  entries: TimetableEntry[];  // Array of timetable entries
}

// Define the structure for a group
interface Group {
  id: string;           // The group ID
  name: string;         // The group name
  short: string;        // The short name of the group
}

// Define the structure for the overall response
interface TimetableResponse {
  group: Group;                        // The group information
  timetable: WeekdayTimetable[];      // Array of timetables for different weekdays
}

interface Todo {
  id: string;
  date: string;
  paskaita: string;
  destytojas: string;
  auditorija: string;
  grupe: string;
}


import {ref as dbRef, query, orderByChild, onValue} from 'firebase/database';

import moment from "moment";
import 'moment/dist/locale/lt';

// const todos = ref([]); // All todos
// const filteredTodos = ref([]); // Filtered todos

const todos = ref<Todo[]>([]); // All todos
const filteredTodos = ref<Todo[]>([]); // Filtered todos


// Access Firebase database via $firebaseDb
const {$firebaseDb} = useNuxtApp();

const fetchTodos = async () => {
  const dbRefPath = dbRef($firebaseDb, 'user-posts');
  const q = query(dbRefPath, orderByChild('paskaita'));

  return new Promise<void>((resolve) => {
    // Fetch data from the Firebase Realtime Database
    onValue(q, (snapshot) => {
      const temp: Todo[] = []; // Temporary array with Todo type
      snapshot.forEach((data) => {
        const obj = data.val();
        const formattedDate = transformDate(obj.date); // Transform the date before adding it

        temp.push({
          id: data.key,
          date: formattedDate, // Use the formatted date here
          paskaita: obj.paskaita,
          destytojas: obj.destytojas,
          auditorija: obj.auditorija,
          grupe: obj.grupe.replace('<b>', '').replace('</b>', ''),
        });
      });

      todos.value = temp; // Update the todos with the typed array
      resolve(); // Resolve the promise once data is fetched
    });
  });
};

const transformDate = (dateStr: string | number): string => {
  const parsedDate = new Date(Date.parse(dateStr + " UTC"));
  return parsedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD in UTC
};


watch(todos, () => {
  fetchTimetable();
  filterTodosByCurrentWeek();
});


// Function to filter todos based on the current week
const filterTodosByCurrentWeek = () => {
  const startOfWeek = new Date();
  const endOfWeek = new Date();

  // Set the start of the week to Monday
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1);
  startOfWeek.setHours(0, 0, 0, 0); // Start of the day

  // Set the end of the week to Sunday
  endOfWeek.setDate(endOfWeek.getDate() - endOfWeek.getDay() + 7);
  endOfWeek.setHours(23, 59, 59, 999); // End of the day

  // Filter todos based on the date
  filteredTodos.value = todos.value.filter(todo => {
    const todoDate = new Date(todo.date); // Convert to Date object
    return todoDate >= startOfWeek && todoDate <= endOfWeek; // Check if within the week
  });
};

function shouldCheckClassroom(currentDate: string | number, classid: string | number, index: number) {
  const parseDateToUTC = (dateStr: string | number): string => {
    const parsedDate = new Date(Date.parse(dateStr + " UTC"));
    return parsedDate.toISOString().split('T')[0];
  };

  const formattedCurrentDate = parseDateToUTC(currentDate);

  const results = filteredTodos.value.map((classroom) => {
    const formattedClassroomDate = parseDateToUTC(classroom.date);
    const areDatesEqual = formattedCurrentDate === formattedClassroomDate;

    const groupId = classid.toString();
    const classroomGroups = classroom.grupe.split(',').map(group => group.trim());
    let isGroupEqual = false;

    if (!groupId.includes('.')) {
      isGroupEqual = classroomGroups.includes(groupId.trim());
    } else {
      const normalizedGroupId = groupId.replace(/[\(\)]/g, "").replace("pogrupis", "pogr.").trim();
      isGroupEqual = classroomGroups.includes(normalizedGroupId);
    }

    const isLectureEqual = classroom.paskaita === String(index + 1);

    return {
      classroom,
      isMatch: areDatesEqual && isGroupEqual && isLectureEqual,
      isNewLecture: areDatesEqual && isGroupEqual,
      isGroupEnglish: doesFirstWordEndWithE(classroom.grupe.trim()),
    };
  });

  const matches = results.filter(result => result.isMatch);
  return matches.length > 0 ? matches[0] : null;
}

function doesFirstWordEndWithE(grupe: string): boolean {

  const words = grupe.trim().split(" ");
  return words.length > 0 && words[0].endsWith("E");
}


const timeRanges = ref([
  '08:30 - 10:00',
  '10:15 - 11:45',
  '12:30 - 14:00',
  '14:15 - 15:45',
  '16:00 - 17:30',
  '17:45 - 19:15'
]);


const timetable = ref<TimetableResponse | null>(null);

const fetchTimetable = async () => {
  try {
    const response = await fetch('https://onlinecourses-production.up.railway.app/timetable/groups');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: TimetableResponse = await response.json();
    timetable.value = data;

    if (filteredTodos.value.length > 0) {
      filteredTodos.value.forEach((classroom) => {

        const newEntry = {
          date: classroom.date,
          uniperiod: classroom.paskaita,         // Period to check for
          subjectid: classroom.destytojas,
          groupnames: "",
          teacherids: "New Teacher",
          classroomids: classroom.auditorija,
          dayname: "Trečiadienis"
        };
        addTimetableEntry(timetable.value, classroom.grupe, classroom.date, newEntry);
      });
    }
    filterTodosByCurrentWeek();

  } catch (error) {
    console.error('Failed to fetch timetable:', error);
  }
};


function addTimetableEntry(timetableData, newGroupName, newWeekday, newEntry) {
  const groupTimetable = timetableData.find(
      item => item.group.name === newGroupName
  );

  // If no timetable exists for this group and weekday, create a new entry
  if (!groupTimetable) {
    timetableData.push({
      group: {
        id: "-922", // or use dynamic id
        name: newGroupName,
        short: newGroupName
      },
      timetable: [{
        weekday: newWeekday,
        entries: [newEntry]
      }]
    });
    return timetableData;
  }

  // Find the specific weekday timetable
  const weekdayTimetable = groupTimetable.timetable.find(
      day => day.weekday === newWeekday
  );

  // If no weekday timetable exists, add one with the new entry
  if (!weekdayTimetable) {
    groupTimetable.timetable.push({
      weekday: newWeekday,
      entries: [newEntry]
    });
    return timetableData;
  }

  // Check if there's already an entry with the same uniperiod
  const entryExists = weekdayTimetable.entries.some(
      entry => entry.uniperiod === newEntry.uniperiod
  );

  // If no matching entry in the same uniperiod, add the new entry
  if (!entryExists) {
    weekdayTimetable.entries.push(newEntry);
  } else {
    console.log('Entry already exists for this period');
  }

  return timetableData;
}

const weekRange = ref('');

const calculateWeekRange = () => {
  const currentDate = new Date();
  const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  const options = {year: 'numeric', month: 'long', day: 'numeric', locale: 'lt-LT'};
  weekRange.value = `${firstDayOfWeek.toLocaleDateString('lt-LT', options)} - ${lastDayOfWeek.toLocaleDateString('lt-LT', options)}`;
};

const time = ref<string>('')

const updateClock = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  time.value = `${hours}:${minutes}:${seconds}`
}


const isCurrentDay = (dateString: string) => {
  return moment(dateString).isSame(moment(), 'day');
}


let interval: ReturnType<typeof setInterval>

onMounted(async () => {
  moment.locale('lt');
  calculateWeekRange();
  updateClock() // Set initial time
  interval = setInterval(updateClock, 1000)
  // Update every second
  await fetchTodos();
  filterTodosByCurrentWeek();
  await fetchTimetable();

  //console.log('Filtered Todos after onMounted:', filteredTodos.value); // Check if populated

});
onUnmounted(() => {
  clearInterval(interval)
})

</script>

<template>

  <header
      class="flex flex-col md:flex-row items-center justify-between  border pl-5 pt-2 pb-2 pr-2 bg-gray-800 text-white shadow-md">
    <div class="flex items-center mb-2 md:mb-0">
      <h1 class="text-lg font-semibold">
        Einamoji savaitė: <span>{{ weekRange }}</span>
      </h1>
    </div>
    <div class="text-lg font-semibold mb-2 md:mb-0 bg-cyan-500 p-1">{{ time }}</div>

    <!-- Legend Section Inside Header -->
    <div class="flex items-center space-x-4">
      <div class="flex items-center">
        <div class="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
        <span class="text-sm">Paskaitų pakeitimai (Lecture Changes)</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
        <span class="text-sm">Paskaitos nėra (No Lecture)</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 bg-cyan-100 rounded-full mr-2"></div>
        <span class="text-sm">Šiandien (Today)</span>
      </div>
    </div>
  </header>
  <div class="grid grid-cols-4 gap-2">
    <template v-for="group in timetable" :key="group.group.id">

      <template v-if="group.group.name.split(' ').length === 1">
        <div class="overflow-hidden">
          <table class="timetable-table min-w-full">
            <thead class="bg-black text-white">
            <tr>
              <th class="border">{{ group.group.name }}</th>
              <th
                  class="table-header font-bold text-center"
                  v-for="(slot, index) in timeRanges"
                  :key="index"
              >
                <div class="lecture-title font-medium">{{ index + 1 }} paskaita</div>
                <div class="time-slot">{{ slot }}</div>
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-for="weekday in group.timetable" :key="weekday.weekday">
              <tr>


                <td v-if="isCurrentDay(weekday.weekday)" style="font-weight: bold!important;"
                    class="table-cell border px-4 py-2 bg-cyan-100">
                  {{ weekday.entries?.[0]?.dayname || 'N/A' }}<br/>{{ weekday.entries?.[0]?.date || 'N/A' }}
                </td>
                <td v-else class="table-cell border px-4 font-bold">
                  {{ weekday.entries?.[0]?.dayname || 'N/A' }}<br/>{{ weekday.entries?.[0]?.date || 'N/A' }}
                </td>


                <td v-if="isCurrentDay(weekday.weekday)" v-for="(timeSlot, index) in timeRanges" :key="index"
                    class="table-cell bg-cyan-100 px-1">
                  <div
                      v-for="entry in (weekday.entries || [])"
                      :key="entry?.subjectid || index"
                  >

                    <template v-if="entry?.uniperiod === String(index + 1)">
                      <template
                          v-if="shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.isMatch">
                        <template
                            v-if="shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.classroom.auditorija === '-'">
                          <span class="line-through">{{ entry.subjectid }},</span>
                          <span class="font-bold line-through">
                                            {{ entry.classroomids }} {{ entry.groupnames }}
                                          </span>
                          <p class="bg-red-500 text-black font-light p-1">
                            {{
                              shouldCheckClassroom(entry.date, group.group.name + ' ' + entry.groupnames, index)?.classroom.destytojas
                            }}
                          </p>
                        </template>
                        <template v-else>
                          <div class="bg-yellow-400 text-black font-light p-1">
                            <span>{{ entry.subjectid }},</span>
                            <span class="font-bold">
                                              {{
                                shouldCheckClassroom(entry.date, group.group.name + ' ' + entry.groupnames, index)?.classroom.auditorija
                              }}
                                              {{ entry.groupnames }},
                                              {{
                                shouldCheckClassroom(entry.date, group.group.name + ' ' + entry.groupnames, index)?.classroom.destytojas
                              }}
                                            </span>
                            <p v-if="!shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.isGroupEnglish">
                              Pasikeitė auditorija
                            </p>
                            <p v-else>
                              The classroom has changed
                            </p>
                          </div>
                        </template>
                      </template>

                      <template v-else>
                        {{ entry.subjectid }},
                        <span class="font-bold">
                                          {{ entry.classroomids }} {{ entry.groupnames }}
                                        </span>
                      </template>
                    </template>


                  </div>
                </td>
                <td v-else v-for="(timeSlot, index) in timeRanges" :key="timeSlot.length" class="table-cell px-1">
                  <div
                      v-for="entry in (weekday.entries || [])"
                      :key="entry?.subjectid || index"
                  >

                    <template v-if="entry?.uniperiod === String(index + 1)">
                      <template
                          v-if="shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.isMatch">
                        <template
                            v-if="shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.classroom.auditorija === '-'">
                          <span class="line-through">{{ entry.subjectid }},</span>
                          <span class="font-bold line-through">
                                            {{ entry.classroomids }} {{ entry.groupnames }}
                                          </span>
                          <p class="bg-red-500 text-black font-light p-1">
                            {{
                              shouldCheckClassroom(entry.date, group.group.name + ' ' + entry.groupnames, index)?.classroom.destytojas
                            }}
                          </p>
                        </template>
                        <template v-else>
                          <div class="bg-yellow-400 text-black font-light p-1">
                            <span>{{ entry.subjectid }},</span>
                            <span class="font-bold">
                                              {{
                                shouldCheckClassroom(entry.date, group.group.name + ' ' + entry.groupnames, index)?.classroom.auditorija
                              }}
                                              {{ entry.groupnames }},
                                              {{
                                shouldCheckClassroom(entry.date, group.group.name + ' ' + entry.groupnames, index)?.classroom.destytojas
                              }}
                                            </span>
                            <p v-if="!shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.isGroupEnglish">
                              Pasikeitė auditorija
                            </p>
                            <p v-else>
                              The classroom has changed
                            </p>
                          </div>
                        </template>
                      </template>

                      <template v-else>
                        {{ entry.subjectid }},
                        <span class="font-bold">
                                          {{ entry.classroomids }} {{ entry.groupnames }}
                                        </span>
                      </template>
                    </template>


                  </div>
                </td>


              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </template>
    </template>
  </div>

</template>

<style scoped>

.timetable-table {
  width: 100%;
  border-collapse: collapse;

}

.table-header {
  font-size: 0.65rem;
  font-weight: bold;
  border: 0.01rem solid white;
}

.table-cell {
  font-size: 0.65rem;
  font-weight: lighter;
  height: auto;
  color: black;
  border: 0.01rem solid gray;
}

th {
  background-color: black;
  color: white;
  text-align: center;
}

td {
  border: 0.01rem solid #ddd;
}


</style>
