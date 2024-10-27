<script setup lang="ts">

import {ref} from 'vue';
import {useFetch} from 'nuxt/app'; // Ensure useFetch is properly imported

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
      temp.push({
        id: data.key,
        date: obj.date,
        paskaita: obj.paskaita,
        destytojas: obj.destytojas,
        auditorija: obj.auditorija,
        grupe: obj.grupe.replace('<b>', '').replace('</b>', ''),
      });
    });

    todos.value = temp; // Update the todos
    filterTodosByCurrentWeek(); // Call the filter function
  });
};

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


// Function to fetch classroom data for multiple IDs
const fetchClassroomData = async (classroomIds: string[]) => {
  try {
    const fetchPromises = classroomIds.map(classroomId =>
        useFetch<TimetableEntry[]>(`https://onlinecourses-production.up.railway.app/timetable/group?group_id=${classroomId}`)
    );

    // Await all promises to resolve
    const results = await Promise.all(fetchPromises);

    // Iterate through the results and merge data into finalClassrooms
    results.forEach(({data, error}, index) => {
      if (error.value) {
        console.error(`Error fetching classroom data for group ${classroomIds[index]}:`, error.value);
      }
      if (data.value) {
        finalClassrooms.value.push(...data.value); // Merge results
      }
    });

    // Group and sort the data
    groupAndSortClassrooms();
    console.log('Grouped classrooms:', groupedClassrooms.value);
  } catch (e) {
    console.error('Failed to fetch classroom data:', e);
  }
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
    console.log('API Response:', data); // Log the response for debugging

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

  // Optionally, sort the time slots
  timeSlots.value.sort();

  console.log('Grouped classrooms by classid:', groupedClassrooms.value);
};
const removeBoldTags = (text: string): string => {
  return text.replace(/<\/?b>/g, "");
};
// Fetch data when the component is mounted
onMounted(async () => {
  const classroomIds = await fetchGroupIds(); // Get the group IDs
  if (classroomIds.length > 0) { // Check if the array is not empty
    await fetchClassroomData(classroomIds); // Fetch classroom data with valid IDs
  }
});

onMounted(() => {
  fetchTodos();
});
</script>

<template>
  <div>
    <div v-if="finalClassrooms.length === 0">Loading or no classrooms found.</div>
  </div>


  <div class="grid grid-cols-4 gap-2">
    <template v-for="(classEntries, classid) in groupedClassrooms" :key="classid">
      <div class="overflow-hidden">
        <table class="timetable-table min-w-full">
          <thead class="bg-black text-white">
          <tr>
            <th class="border">{{ classid }}</th>
            <th class="table-header border py-2 font-bold" v-for="(timeSlot, index) in timeRanges" :key="index">
              {{ timeSlot }}
            </th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(entries, date) in classEntries" :key="date">
            <td class="table-cell border px-4">{{ getLithuanianWeekday(date) }}<br/>{{ date }}</td>
            <td v-for="(timeSlot, index) in timeSlots" :key="index" class="table-cell border px-2">
              <div>
                <div v-for="entry in getEntriesInTimeSlot(entries, timeSlot)" :key="entry.subjectid"
                     class="flex flex-col">
                  <p>







                      <template v-if="entry.classroomids.join(', ').includes('408')">

                        <template v-if="classid === 'EI22A' && index === 1">

                          <span class="line-through">{{ entry.subjectid }},</span>
                          <span class="font-bold line-through">{{
                              entry.classroomids.join(', ')
                            }} {{ entry.groupnames.join(', ') }}</span>

                          <p class="bg-red-500 text-white font-bold p-1" v-if="index === 1">
                            Paskaitos nėra
                          </p>
                        </template>

                        <template v-else>
                          {{ entry.subjectid }},
                          <span class="font-bold">{{ entry.classroomids.join(', ') }} {{
                              entry.groupnames.join(', ')
                            }}</span>
                        </template>
                      </template>
                      <template v-else>
                        {{ entry.subjectid }},
                        <span class="font-bold">{{ entry.classroomids.join(', ') }} {{ entry.groupnames.join(', ') }}</span>
                      </template>




                  </p>

                </div>
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
