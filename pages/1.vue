<script setup lang="ts">

import {ref} from 'vue';

interface TimetableEntry {
  type: string;
  date: string;
  uniperiod: string;
  starttime: string;
  endtime: string;
  subjectid: string;
  classids: string[];
  groupnames: string[];
  igroupid: string;
  teacherids: string[];
  classroomids: string[];
  colors: string[];
}

interface Group {
  id: string; // Group ID
  name: string; // Group name
  short: string; // Short name
}

import {ref as dbRef, query, orderByChild, onValue} from 'firebase/database';

const todos = ref([]); // All todos
const filteredTodos = ref([]); // Filtered todos

// Access Firebase database via $firebaseDb
const {$firebaseDb} = useNuxtApp();

const fetchTodos = () => {
  const dbRefPath = dbRef($firebaseDb, 'user-posts');
  const q = query(dbRefPath, orderByChild('paskaita'));

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
    // filterTodosByCurrentWeek(); // Call the filter function
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

const weekdays = [
  'Pirmadienis', // Monday
  'Antradienis', // Tuesday
  'Trečiadienis', // Wednesday
  'Ketvirtadienis', // Thursday
  'Penktadienis', // Friday
  'Šeštadienis', // Saturday
  'Sekmadienis' // Sunday
];

// Function to get the weekday name
const getLithuanianWeekday = (dateString) => {
  const date = new Date(dateString);
  const dayIndex = date.getDay(); // getDay returns 0 for Sunday, 1 for Monday, etc.
  return weekdays[(dayIndex + 6) % 7]; // Adjusting to match Lithuanian week (Monday as first day)
};


// Ref for storing final classrooms data
const finalClassrooms = ref<TimetableEntry[]>([]);
const groupedClassrooms = ref<{ [classid: string]: { [date: string]: { [starttime: string]: TimetableEntry[] } } }>({});
const timeSlots = ref<string[]>([]); // To hold unique time slots


// Function to add minutes to a time string
function addMinutes(timeString: string, minutes: number): string {
  const [hours, minutesPart] = timeString.split(':').map(Number);
  const totalMinutes = hours * 60 + minutesPart + minutes;
  const newHours = Math.floor(totalMinutes / 60) % 24; // Wrap around to 24-hour format
  const newMinutes = totalMinutes % 60;
  return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
}

// Computed property to generate time ranges
const timeRanges = computed(() => {
  return timeSlots.value.map((timeSlot: string) => { // Specify the type of timeSlot
    const startTime = timeSlot; // Starting time
    const endTime = addMinutes(startTime, 90); // Adding 1 hour and 30 minutes
    return `${startTime} - ${endTime}`;
  });
});


const fetchClassroomData = async (classroomIds: string[]) => {
  try {
    // Use $fetch with map to fetch data for each classroomId
    const fetchPromises = classroomIds.map(classroomId =>
        $fetch<TimetableEntry[]>(`https://onlinecourses-production.up.railway.app/timetable/group?group_id=${classroomId}`)
    );

    // Await all promises to resolve
    const results = await Promise.allSettled(fetchPromises);

    // Iterate through the results and merge data into finalClassrooms
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.error(`Error fetching classroom data for group ${classroomIds[index]}:`, result.reason);
      } else if (result.value) {
        finalClassrooms.value.push(...result.value); // Merge results



        const newTimetableEntry: TimetableEntry = {
          type: "Lecture",
          date: "2024-10-29",
          uniperiod: "7",
          starttime: "19:30",
          endtime: "20:45",
          subjectid: "",
          classids: ["PI23E"],
          groupnames: [""],
          igroupid: "GRP123",
          teacherids: [""],
          classroomids: [""],
          colors: ["#FF5733"]
        };

        // Ensure nested structure exists at each level


        // Append the new timetable entry
        finalClassrooms.value.push(newTimetableEntry);


      }
    });


    console.log('Final classrooms before grouping:', finalClassrooms.value);


    // Group and sort the data
    groupAndSortClassrooms();
    sortGroupedClassrooms();
    console.log('Grouped classrooms:', groupedClassrooms.value);
  } catch (e) {
    console.error('Failed to fetch classroom data:', e);
  }
};




// ANTRA RUSIAVIMO VERSIJA
const sortGroupedClassrooms = () => {
  // Step 1: Transform the object into an array
  const classroomsArray: Array<{ classid: string; date: string; starttime: string; entries: TimetableEntry[] }> = [];

  for (const classid in groupedClassrooms.value) {
    for (const date in groupedClassrooms.value[classid]) {
      for (const starttime in groupedClassrooms.value[classid][date]) {
        classroomsArray.push({
          classid,
          date,
          starttime,
          entries: groupedClassrooms.value[classid][date][starttime],
        });
      }
    }
  }

  // Step 2: Sort the array by date and then by starttime
  classroomsArray.sort((a, b) => {
    // Sort by date first
    const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime();
    if (dateComparison !== 0) return dateComparison;

    // Sort by starttime if dates are equal
    return a.starttime.localeCompare(b.starttime);
  });

  // Step 3: (Optional) Transform back to the original structure
  const sortedGroupedClassrooms: typeof groupedClassrooms.value = {};

  classroomsArray.forEach(({ classid, date, starttime, entries }) => {
    if (!sortedGroupedClassrooms[classid]) {
      sortedGroupedClassrooms[classid] = {};
    }
    if (!sortedGroupedClassrooms[classid][date]) {
      sortedGroupedClassrooms[classid][date] = {};
    }
    sortedGroupedClassrooms[classid][date][starttime] = entries;
  });

  // Assign the sorted result back to groupedClassrooms
  groupedClassrooms.value = sortedGroupedClassrooms;

  // Log the sorted structure for debugging
  console.log('Sorted grouped classrooms:', groupedClassrooms.value);
};



// Function to fetch group IDs
const fetchGroupIds = async () => {
  try {
    const response = await fetch('https://onlinecourses-production.up.railway.app/timetable/groups/ids');

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON from the response
    //console.log('API Response:', data); // Log the response for debugging

    // Check if data is an array
    if (Array.isArray(data)) {
      // Map over the data to extract group IDs
      return data.map(group => group.id);
    } else {
      console.error('Unexpected data structure:', data);
      return [];
    }
  } catch (error) {
    console.error('Failed to fetch group IDs:', error);
    return [];
  }
};


const groupAndSortClassrooms = () => {
  // Reset groupedClassrooms
  groupedClassrooms.value = {};

  // Group by classid, date, starttime, and endtime
  finalClassrooms.value.forEach((entry) => {
    entry.classids.forEach(classid => {
      const entryDate = entry.date; // Use the date as the key
      const entryStartTime = entry.starttime; // Use the start time as the key
      const entryEndTime = entry.endtime; // Use the end time as the key

      // Initialize group entry if it doesn't exist
      if (!groupedClassrooms.value[classid]) {
        groupedClassrooms.value[classid] = {};
      }
      if (!groupedClassrooms.value[classid][entryDate]) {
        groupedClassrooms.value[classid][entryDate] = {};
      }

      // Create a unique key for both start and end times
      const timeKey = `${entryStartTime}-${entryEndTime}`;

      if (!groupedClassrooms.value[classid][entryDate][timeKey]) {
        groupedClassrooms.value[classid][entryDate][timeKey] = [];
      }

      // Check if the entry is already added to avoid duplicates
      const existingEntries = groupedClassrooms.value[classid][entryDate][timeKey];
      if (!existingEntries.some(existingEntry => existingEntry.subjectid === entry.subjectid)) {
        // Push the entry into the appropriate group
        existingEntries.push(entry);
      }

      // Add the start time to timeSlots if it doesn't exist
      if (!timeSlots.value.includes(entryStartTime)) {
        timeSlots.value.push(entryStartTime);
      }
    });
  });

  timeSlots.value.sort();

  //console.log('Grouped classrooms by classid:', groupedClassrooms.value);
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
    let isGroupEqual = false;
    const groupId = classid.toString();

    // More flexible group matching
    const baseGroupId = groupId.split(' ')[0]; // Get the main group ID (like "PI23E")
    const classroomGroup = classroom.grupe.replace(/[\(\)]/g, "").replace("pogrupis", "pogr.").trim();

    if (!groupId.includes('.') && !groupId.includes(' ')) {
      // Simple group matching for cases like "PI23E"
      isGroupEqual = baseGroupId === classroomGroup || groupId === classroomGroup;
    } else {
      // Complex group matching for cases with subgroups
      isGroupEqual = groupId.trim() === classroomGroup;
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
  // Split the string into words based on spaces
  const words = grupe.trim().split(" ");

  // Check if there's at least one word and if the first word ends with 'E'
  return words.length > 0 && words[0].endsWith("E");
}

// function shouldCheckClassroom(currentDate: string | number, classid: string | number, index: number) {
//
//
//
//   const parseDateToUTC = (dateStr: string | number): string => {
//     const parsedDate = new Date(Date.parse(dateStr + " UTC"));
//     return parsedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD in UTC
//   };
//
//   const formattedCurrentDate = parseDateToUTC(currentDate);
//
//   return filteredTodos.value.some((classroom) => {
//     const formattedClassroomDate = parseDateToUTC(classroom.date);
//
//     // Compare only year, month, and day
//     const areDatesEqual = formattedCurrentDate === formattedClassroomDate;
//     //const isGroupEqual = classroom.grupe === classid;
//
//     let isGroupEqual;
//     let groupId = classid.toString();
//
//
//
//     if (!groupId.includes('.')) {
//       isGroupEqual = groupId.trim() === classroom.grupe.trim();
//
//       //isGroupEqual = groupId.split(' ')[0] === classroom.grupe.split(' ')[0];
//       console.log('GRUPES ID: ', classid.toString(), classroom.grupe)
//     }else {
//       isGroupEqual = groupId.trim().split(' ')[0] === classroom.grupe.trim().split(' ')[0];
//     }
//     // Check for equality after processing
//    // const isGroupEqual = groupId === classid;
//
//     if (areDatesEqual && isGroupEqual && classroom.paskaita === (index + 1)) {
//       console.log(areDatesEqual, currentDate, classid, index); // Debug statement
//       return true; // Only return true if the conditions are met
//     }
//
//
//     const isLectureEqual = classroom.paskaita === String(index + 1);
//
//     // Debugging output
//
//
//     if(areDatesEqual && isGroupEqual && isLectureEqual) {
//       console.log({
//         formattedCurrentDate,
//         formattedClassroomDate,
//         areDatesEqual,
//         isGroupEqual,
//         isLectureEqual,
//         classroom,
//         currentDate,
//         classid,
//         lectureIndex: index + 1
//       });
//     }
//     // Return true only if all conditions match
//     return areDatesEqual && isGroupEqual && isLectureEqual;
//   });
// }


const removeBoldTags = (text: string): string => {
  return text.replace(/<\/?b>/g, "");
};
// Fetch data when the component is mounted


// onMounted(() => {
//   fetchTodos();
// });
import moment from "moment";
import 'moment/dist/locale/lt';

const weekRange = ref('');
const time = ref<string>('');

const calculateWeekRange = () => {
  const currentDate = new Date();
  const firstDayOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  const options = {year: 'numeric', month: 'long', day: 'numeric', locale: 'lt-LT'};
  weekRange.value = `${firstDayOfWeek.toLocaleDateString('lt-LT', options)} - ${lastDayOfWeek.toLocaleDateString('lt-LT', options)}`;
};

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  time.value = `${hours}:${minutes}:${seconds}`;
};

let interval: ReturnType<typeof setInterval>;

// Update your onMounted function


onMounted(async () => {
  moment.locale('lt');
  calculateWeekRange();
  updateClock(); // Set initial time
  interval = setInterval(updateClock, 1000); // Update every second
  const classroomIds = await fetchGroupIds(); // Get the group IDs
  if (classroomIds.length > 0) { // Check if the array is not empty
    await fetchClassroomData(classroomIds); // Fetch classroom data with valid IDs
    fetchTodos();
    console.log('filtered todos: ', filteredTodos);

  }
});


onUnmounted(() => {
  clearInterval(interval);
});




</script>

<template>
  <header class="flex flex-col md:flex-row items-center justify-between border pl-5 pt-2 pb-2 pr-2 bg-gray-800 text-white shadow-md">
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
        <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
        <span class="text-sm">Nauja paskaita (New Lecture)</span>
      </div>
      <div class="flex items-center">
        <div class="w-4 h-4 bg-cyan-100 rounded-full mr-2"></div>
        <span class="text-sm">Šiandien (Today)</span>
      </div>
    </div>
  </header>

  <div>
    <div v-if="finalClassrooms.length === 0" class="loading-message">
      Loading or no classrooms found.
    </div>
  </div>

  <div class="grid grid-cols-4 gap-3">
    <template v-for="(classEntries, classid) in groupedClassrooms" :key="classid">
      <div class="overflow-hidden tv-table-container">
        <table class="timetable-table min-w-full">
          <thead class="bg-black text-white">
          <tr>
            <th class="border group-header">{{ classid }}</th>
            <th
                class="table-header border py-2 text-center"
                v-for="(timeSlot, index) in timeRanges"
                :key="index"
            >
              <div class="lecture-title font-medium">
                {{ index + 1 }} paskaita
              </div>
              <div class="time-slot text-white">
                {{ timeSlot }}
              </div>
            </th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(entries, date) in classEntries" :key="date" class="table-row">
            <td class="table-cell border px-4 weekday-cell">
              <div class="weekday-name">{{ getLithuanianWeekday(date) }}</div>
              <div class="date-info">{{ date }}</div>
            </td>
            <td v-for="(timeSlot, index) in timeSlots" :key="index" class="table-cell border px-2 lecture-cell">
              <div>
                <!-- Check if there are regular timetable entries -->
                <template v-if="getEntriesInTimeSlot(entries, timeSlot).length > 0">
                  <!-- Regular entries exist - show them with Firebase checks -->
                  <div
                      v-for="entry in getEntriesInTimeSlot(entries, timeSlot)"
                      :key="entry.subjectid + '-' + index"
                      class="flex flex-col entry-container"
                  >
                    <p>
                      <template v-if="shouldCheckClassroom(date, classid +' '+ entry.groupnames.join(', '), index)">
                        <template
                            v-if="shouldCheckClassroom(date, classid +' '+ entry.groupnames.join(', '), index)?.isMatch && shouldCheckClassroom(date, classid +' '+ entry.groupnames.join(', '), index)?.classroom.auditorija ==='-'">
                          <span class="line-through">{{ entry.subjectid }},</span>
                          <span class="font-bold line-through">
                            {{ entry.classroomids.join(', ') }} {{ entry.groupnames.join(', ') }}
                          </span>
                          <p class="bg-red-500 text-white font-light p-1">
                            {{ shouldCheckClassroom(date, classid + ' ' + entry.groupnames.join(', '), index)?.classroom.destytojas }}
                          </p>
                        </template>
                        <template v-else>
                          <div class="bg-yellow-400 text-black font-light p-1">
                            <span>{{ entry.subjectid }},</span>
                            <span class="font-bold">
                              {{ shouldCheckClassroom(date, classid + ' ' + entry.groupnames.join(', '), index)?.classroom.auditorija }} {{
                                entry.groupnames.join(', ')
                              }}, {{ shouldCheckClassroom(date, classid + ' ' + entry.groupnames.join(', '), index)?.classroom.destytojas }}
                            </span>
                            <p v-if="!shouldCheckClassroom(date, classid +' '+ entry.groupnames.join(', '), index)?.isGroupEnglish">
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
                          {{ entry.classroomids.join(', ') }} {{ entry.groupnames.join(', ') }}
                        </span>
                      </template>
                    </p>
                  </div>
                </template>

                <!-- No regular entries - check for Firebase-only changes -->
                <template v-else>
                  <template v-if="shouldCheckClassroom(date, classid, index)">
                    <template v-if="shouldCheckClassroom(date, classid, index)?.isMatch">
                      <template v-if="shouldCheckClassroom(date, classid, index)?.classroom.auditorija === '-'">
                        <!-- Red highlight for no lecture in empty cell -->
                        <div class="bg-red-500 text-white font-light p-1 rounded text-center">
                          <div class="text-xs font-bold">{{ shouldCheckClassroom(date, classid, index)?.classroom.destytojas }}</div>
                        </div>
                      </template>
                      <template v-else>
                        <!-- Green highlight for new lecture in empty cell -->
                        <div class="bg-green-500 text-white font-light p-1 rounded text-center">
                          <div class="text-xs font-semibold">{{ shouldCheckClassroom(date, classid, index)?.classroom.destytojas }}</div>
                          <div class="font-bold text-xs">{{ shouldCheckClassroom(date, classid, index)?.classroom.auditorija }}</div>
                          <div class="text-xs mt-1" v-if="!shouldCheckClassroom(date, classid, index)?.isGroupEnglish">
                            Nauja paskaita
                          </div>
                          <div class="text-xs mt-1" v-else>
                            New lecture
                          </div>
                        </div>
                      </template>
                    </template>
                  </template>
                  <!-- If no Firebase changes and no regular entries, show empty cell -->
                </template>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>
<style scoped>
.lecture-title {
  font-size: 0.65rem;
  font-weight: bold;
}

.time-slot {
  font-size: 0.65rem;
  font-weight: 600;
}

.timetable-table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  font-size: 0.65rem;
  font-weight: bold;
  border: 0.01rem solid white;
  background-color: #000000;
  color: #ffffff;
  padding: 4px;
}

.table-cell {
  font-size: 0.65rem;
  font-weight: lighter;
  height: auto;
  color: #000000;
  border: 0.01rem solid gray;
  padding: 2px;
  vertical-align: top;
}

th {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 0.65rem;
  font-weight: bold;
  border: 0.01rem solid #ffffff;
  padding: 4px;
}

td {
  border: 0.01rem solid #ddd;
  background-color: #ffffff;
}

.weekday-cell {
  font-size: 0.6rem;
  padding: 2px !important;
  text-align: center;
}

.weekday-name {
  font-size: 0.6rem;
  font-weight: 600;
}

.date-info {
  font-size: 0.55rem;
}

.bg-green-500 {
  background-color: #22c55e !important;
  color: #000000 !important; /* Changed from #ffffff to #000000 for black text */
  font-weight: bold !important;
  border: 1px solid #16a34a !important;
  border-radius: 2px;
  padding: 2px !important;
}
.bg-red-500 {
  background-color: #dc2626 !important;
  color: #ffffff !important;
  font-weight: bold !important;
  border: 1px solid #991b1b !important;
  border-radius: 2px;
  padding: 2px !important;
}

.bg-yellow-400 {
  background-color: #facc15 !important;
  color: #000000 !important;
  font-weight: bold !important;
  border: 1px solid #eab308 !important;
  border-radius: 2px;
  padding: 2px !important;
}

.line-through {
  text-decoration: line-through;
  text-decoration-thickness: 1px;
  text-decoration-color: #ef4444;
}

.font-bold {
  font-weight: 700;
  font-size: 0.6rem;
}

.table-cell p {
  margin: 1px 0;
  line-height: 1.2;
  font-size: 0.6rem;
}

.entry-container {
  margin: 1px 0;
  padding: 1px;
}

.flex.flex-col + .flex.flex-col {
  margin-top: 2px;
  padding-top: 2px;
  border-top: 1px dashed #d1d5db;
}

.loading-message {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  padding: 10px;
}
</style>