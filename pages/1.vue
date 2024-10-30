<script setup lang="ts">

// Define the structure for an entry in the timetable
interface TimetableEntry {
  date: string;           // The date of the entry
  uniperiod: string;     // The uniperiod
  subjectid: string;     // The subject ID
  groupnames: string;    // Group names
  teacherids: string;    // Teacher IDs
  classroomids: string;  // Classroom IDs
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

import {ref as dbRef, query, orderByChild, onValue} from 'firebase/database';

import moment from "moment";
import 'moment/dist/locale/lt';

const todos = ref([]); // All todos
const filteredTodos = ref([]); // Filtered todos

// Access Firebase database via $firebaseDb
const {$firebaseDb} = useNuxtApp();

const fetchTodos = async () => {
  const dbRefPath = dbRef($firebaseDb, 'user-posts');
  const q = query(dbRefPath, orderByChild('paskaita'));

  return new Promise((resolve) => {
    // Fetch data from the Firebase Realtime Database
    onValue(q, (snapshot) => {
      const temp = [];
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

      todos.value = temp; // Update the todos
      resolve(); // Resolve the promise once data is fetched
    });
  });
};

const transformDate = (dateStr: string | number): string => {
  const parsedDate = new Date(Date.parse(dateStr + " UTC"));
  return parsedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD in UTC
};


watch(todos, () => {
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

const getEntriesInTimeSlot = (entries, timeSlot) => {
  const results = [];
  for (const key in entries) {
    if (entries.hasOwnProperty(key)) {
      const [startTime, endTime] = key.split('-'); // Split the time key into start and end time

      // Check if the current time slot falls within the start and end time
      if (timeSlot >= startTime && timeSlot < endTime) {
        results.push(...entries[key]); // Push all entries that fit the criteria
      }
    }
  }
  return results;
};

// const getLithuanianWeekday = (dateString) => {
//
//   const weekday = moment(dateString).format('dddd');
//   return weekday.charAt(0).toUpperCase() + weekday.slice(1); // Capitalize the first letter
// };


// Ref for storing final classrooms data
//const finalClassrooms = ref<TimetableEntry[]>([]);
// const groupedClassrooms = ref<{ [classid: string]: { [date: string]: { [starttime: string]: TimetableEntry[] } } }>({});
// const timeSlots = ref<string[]>([]); // To hold unique time slots


// Function to add minutes to a time string
// function addMinutes(timeString: string, minutes: number): string {
//   const [hours, minutesPart] = timeString.split(':').map(Number);
//   const totalMinutes = hours * 60 + minutesPart + minutes;
//   const newHours = Math.floor(totalMinutes / 60) % 24; // Wrap around to 24-hour format
//   const newMinutes = totalMinutes % 60;
//   return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
// }

// Computed property to generate time ranges
// const timeRanges = computed(() => {
//   return timeSlots.value.map((timeSlot: string) => { // Specify the type of timeSlot
//     const startTime = timeSlot; // Starting time
//     const endTime = addMinutes(startTime, 90); // Adding 1 hour and 30 minutes
//     return `${startTime} - ${endTime}`;
//   });
// });


function shouldCheckClassroom(currentDate: string | number, classid: string | number, index: number) {
  const parseDateToUTC = (dateStr: string | number): string => {
    const parsedDate = new Date(Date.parse(dateStr + " UTC"));
    return parsedDate.toISOString().split('T')[0];
  };

  const formattedCurrentDate = parseDateToUTC(currentDate);

  const results = filteredTodos.value.map((classroom) => {
    const formattedClassroomDate = parseDateToUTC(classroom.date);
    const areDatesEqual = formattedCurrentDate === formattedClassroomDate;
    let isGroupEqual = false;
    const groupId = classid.toString();

    //console.log(classroom.destytojas);


    if (!groupId.includes('.')) {
      isGroupEqual = groupId.trim() === classroom.grupe.trim();
    } else {
      isGroupEqual = groupId.trim() === classroom.grupe.replace(/[\(\)]/g, "").replace("pogrupis", "pogr.").trim();
    }

    const isLectureEqual = classroom.paskaita === String(index + 1);


    // const parsedEntries: TimetableEntry[] = [
    //   {
    //     date: formattedClassroomDate,
    //     uniperiod: classroom.paskaita,
    //     subjectid: '',
    //     groupnames: 'Group A',
    //     teacherids: classroom.destytojas,
    //     classroomids: classroom.auditorija,
    //     dayname: 'Monday'
    //   },
    //   // Add more entries as needed
    // ];
    //
    // appendEntries(parsedEntries, formattedClassroomDate);



    // const isLecturerExists = classroom.destytojas.includes('Paskaitos nėra');
    // if(!isLecturerExists) {
    // //  console.log(classroom);
    // }

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
  // Split the string into words based on spaces
  const words = grupe.trim().split(" ");

  // Check if there's at least one word and if the first word ends with 'E'
  return words.length > 0 && words[0].endsWith("E");
}


const timeRanges = ref([
  '08:30 - 10:00',
  '09:45 - 11:15',
  '11:30 - 13:00',
  '13:15 - 14:45',
  '15:00 - 16:30',
  '16:45 - 18:15',
  '18:30 - 20:00'
]);



// Function to check if an entry already exists in the timetable
function entryExists(timetable: TimetableResponse, newEntry: TimetableEntry, weekday: string): boolean {
  const dayTimetable = timetable.timetable.find(day => day.weekday === weekday);
  return dayTimetable?.entries.some(entry =>
      entry.date === newEntry.date &&
      entry.uniperiod === newEntry.uniperiod &&
      entry.classroomids === newEntry.classroomids &&
      entry.teacherids === newEntry.teacherids
  ) ?? false;
}

// Function to append entries from parsed list if they don’t already exist
function appendEntries(newEntries: TimetableEntry[], weekday: string) {
  //if (!timetable.value) return;

  console.log("VISKAS OK")

  // Create a new weekday if it doesn't exist

  // TODO NEED TO FIX
    newEntries.forEach(newEntry => {

        timetable.value?.timetable.entries.push(newEntry);

  });
}







const timetable = ref<TimetableResponse | null>(null);

const fetchTimetable = async () => {
  try {
    const response = await fetch('https://onlinecourses-production.up.railway.app/timetable/groups');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: TimetableResponse = await response.json();
    timetable.value = data;

    // Iterate over filteredTodos to append non-duplicate entries
    filteredTodos.value.forEach((classroom) => {
      const formattedDate = transformDate(classroom.date);
      const parsedEntries: TimetableEntry[] = [
        {
          date: formattedDate,
          uniperiod: classroom.paskaita,
          subjectid: '',
          groupnames: 'Group A',
          teacherids: classroom.destytojas,
          classroomids: classroom.auditorija,
          dayname: 'Monday' // adjust dayname as needed
        }
      ];

      // Append entries if they don't already exist
      appendEntries(parsedEntries, formattedDate);
    });

  } catch (error) {
    console.error('Failed to fetch timetable:', error);
  }
};


onMounted(async () => {
  await fetchTimetable();
  moment.locale('lt');
  await fetchTodos(); // Wait for todos to be fetched
  //console.log('Filtered todos:', filteredTodos.value); // Log filteredTodos


});


// Fetch data when the component is mounted
// onMounted(async () => {
//   moment.locale('lt');
//
//   const classroomIds = await fetchGroupIds(); // Get the group IDs
//   if (classroomIds.length > 0) { // Check if the array is not empty
//     await fetchClassroomData(classroomIds); // Fetch classroom data with valid IDs
//     await fetchTodos(); // Wait for todos to be fetched
//     console.log('Filtered todos:', filteredTodos.value); // Log filteredTodos
//
//
//   }
// });

// onMounted(() => {
//   fetchTodos();
// });
</script>

<template>
  <!--  <div>-->
  <!--    <div v-if="finalClassrooms.length === 0">Loading or no classrooms found.</div>-->
  <!--  </div>-->


  <!--  <div>-->
  <!--    <template v-if="timetable">-->
  <!--      <div v-for="item in timetable" :key="item.group.id">-->
  <!--        <h2>{{ item.group.name }}</h2>-->
  <!--        <div v-for="day in item.timetable" :key="day.weekday">-->
  <!--          <h3>{{ day.weekday }}</h3>-->
  <!--          <ul>-->
  <!--            <li v-for="entry in day.entries" :key="entry.uniperiod">-->
  <!--              {{ entry.subjectid }} - {{ entry.teacherids }}-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </template>-->
  <!--    <template v-else>-->
  <!--      <p>Loading timetable...</p> &lt;!&ndash; Loading state &ndash;&gt;-->
  <!--    </template>-->
  <!--  </div>-->


  <!--  {{timetable}}-->


  <div class="grid grid-cols-4 gap-2">
    <template v-for="group in timetable" :key="group.group.id">
      <div class="overflow-hidden">
        <table class="timetable-table min-w-full">
          <thead class="bg-black text-white">
          <tr>
            <th class="border">{{ group.group.name }} </th>
            <th
                class="table-header border py-2 font-bold text-center"
                v-for="(slot, index) in timeRanges"
                :key="index"
            >
              <div class="lecture-title font-medium">{{ index + 1 }} paskaita</div>
              <div class="time-slot text-gray-400">{{ slot }}</div>
            </th>
          </tr>
          </thead>
          <tbody>
          <template v-for="weekday in group.timetable" :key="weekday.weekday">
            <tr>
              <td class="table-cell border px-4 font-bold">
                {{ weekday.entries?.[0]?.dayname || 'N/A' }}<br/>{{ weekday.entries?.[0]?.date || 'N/A' }}
              </td>
              <td v-for="(timeSlot, index) in timeRanges" :key="index" class="table-cell border px-2">
                <div
                    v-for="entry in (weekday.entries || [])"
                    :key="entry?.subjectid || index"
                >

                  <template v-if="entry?.uniperiod === String(index + 1)">
                    <template v-if="shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.isMatch">
                      <template
                          v-if="shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.classroom.auditorija === '-'">
                        <span class="line-through">{{ entry.subjectid }},</span>
                        <span class="font-bold line-through">
                                            {{ entry.classroomids }} {{ entry.groupnames }}
                                          </span>
                        <p class="bg-red-500 text-black font-light p-1">
                          {{ shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.classroom.destytojas }}
                        </p>
                      </template>
                      <template v-else>
                        <div class="bg-yellow-400 text-black font-light p-1">
                          <span>{{ entry.subjectid }},</span>
                          <span class="font-bold">
                                              {{
                              shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.classroom.auditorija
                            }}
                                              {{ entry.groupnames }},
                                              {{
                              shouldCheckClassroom(entry.date, group.group.name +' '+ entry.groupnames, index)?.classroom.destytojas
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
  </div>


  <!--  <div class="grid grid-cols-4 gap-2">-->
  <!--    <template v-for="weekdayTimetable in timetable?.timetable" :key="weekdayTimetable.weekday">-->
  <!--      <div class="overflow-hidden">-->
  <!--        <table class="timetable-table min-w-full">-->
  <!--          <thead class="bg-black text-white">-->
  <!--          <tr>-->
  <!--            <th class="border">{{ timetable?.group.name }}</th>-->
  <!--            <th-->
  <!--                class="table-header border py-2 font-bold text-center"-->
  <!--                v-for="(timeSlot, index) in timeRanges"-->
  <!--                :key="index"-->
  <!--            >-->
  <!--              <div class="lecture-title font-medium">-->
  <!--                {{ index + 1 }} paskaita-->
  <!--              </div>-->
  <!--              <div class="time-slot text-gray-400">-->
  <!--                {{ timeSlot }}-->
  <!--              </div>-->
  <!--            </th>-->
  <!--          </tr>-->
  <!--          </thead>-->

  <!--          <tbody>-->
  <!--          <tr v-for="entry in weekdayTimetable.entries" :key="entry.date">-->
  <!--            <td class="table-cell border px-4">-->
  <!--              {{ entry.dayname }}<br />{{ entry.date }}-->
  <!--            </td>-->
  <!--            <td v-for="(timeSlot, index) in timeSlots" :key="index" class="table-cell border px-2">-->
  <!--              <div>-->
  <!--                <div-->
  <!--                    v-for="entry in getEntriesInTimeSlot(weekdayTimetable.entries, timeSlot)"-->
  <!--                    :key="entry.subjectid + '-' + index"-->
  <!--                    class="flex flex-col"-->
  <!--                >-->
  <!--                  <p>-->
  <!--                    <template v-if="shouldCheckClassroom(entry.date, entry.classroomids.join(', '), index)?.isMatch">-->
  <!--                      <template v-if="shouldCheckClassroom(entry.date, entry.classroomids.join(', '), index)?.classroom.auditorija === '-'">-->
  <!--                        <span class="line-through">{{ entry.subjectid }},</span>-->
  <!--                        <span class="font-bold line-through">-->
  <!--                          {{ entry.classroomids.join(', ') }} {{ entry.groupnames.join(', ') }}-->
  <!--                        </span>-->
  <!--                        <p class="bg-red-500 text-black font-light p-1">-->
  <!--                          {{ shouldCheckClassroom(entry.date, entry.classroomids.join(', '), index)?.classroom.destytojas }}-->
  <!--                        </p>-->
  <!--                      </template>-->
  <!--                      <template v-else>-->
  <!--                        <div class="bg-yellow-400 text-black font-light p-1">-->
  <!--                          <span>{{ entry.subjectid }},</span>-->
  <!--                          <span class="font-bold">-->
  <!--                            {{ shouldCheckClassroom(entry.date, entry.classroomids.join(', '), index)?.classroom.auditorija }}-->
  <!--                            {{ entry.groupnames.join(', ') }},-->
  <!--                            {{ shouldCheckClassroom(entry.date, entry.classroomids.join(', '), index)?.classroom.destytojas }}-->
  <!--                          </span>-->
  <!--                          <p v-if="!shouldCheckClassroom(entry.date, entry.classroomids.join(', '), index)?.isGroupEnglish">-->
  <!--                            Pasikeitė auditorija-->
  <!--                          </p>-->
  <!--                          <p v-else>-->
  <!--                            The classroom has changed-->
  <!--                          </p>-->
  <!--                        </div>-->
  <!--                      </template>-->
  <!--                    </template>-->
  <!--                    <template v-else>-->
  <!--                      {{ entry.subjectid }},-->
  <!--                      <span class="font-bold">-->
  <!--                        {{ entry.classroomids.join(', ') }} {{ entry.groupnames.join(', ') }}-->
  <!--                      </span>-->
  <!--                    </template>-->
  <!--                  </p>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </td>-->
  <!--          </tr>-->
  <!--          </tbody>-->
  <!--        </table>-->
  <!--      </div>-->
  <!--    </template>-->
  <!--  </div>-->
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
  height: 70px;
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

tr:nth-child(even) {
  background-color: #f2f2f2;
}


</style>
