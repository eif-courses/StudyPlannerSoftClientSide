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

// Function to fetch classroom data for multiple IDs
const fetchClassroomData = async (classroomIds: string[]) => {
  try {
    const fetchPromises = classroomIds.map(classroomId =>
        useFetch<TimetableEntry[]>(`https://onlinecourses-production.up.railway.app/timetable/group?group_id=${classroomId}`)
    );

    // Await all promises to resolve
    const results = await Promise.all(fetchPromises);

    // Iterate through the results and merge data into finalClassrooms
    results.forEach(({ data, error }, index) => {
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
    const { data, error } = await useFetch<Group[]>('https://onlinecourses-production.up.railway.app/timetable/groups/ids');

    // Check if there was an error fetching data
    if (error.value) {
      console.error('Error fetching group IDs:', error.value);
      return [];
    }

    // Check if data is defined and is an array
    if (data.value && Array.isArray(data.value)) {
      // Extract and return only the IDs from the group objects
      return data.value.map(group => group.id) || [];
    } else {
      console.error('Unexpected data structure:', data.value);
      return []; // Return an empty array if data is not in expected format
    }
  } catch (e) {
    console.error('Failed to fetch group IDs:', e);
    return [];
  }
};

// Function to group and sort classrooms
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

      // Push the entry into the appropriate group
      groupedClassrooms.value[classid][entryDate][timeKey].push(entry);
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

// Fetch data when the component is mounted
onMounted(async () => {
  const classroomIds = await fetchGroupIds(); // Get the group IDs
  if (classroomIds.length > 0) { // Check if the array is not empty
    await fetchClassroomData(classroomIds); // Fetch classroom data with valid IDs
  }
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
          <thead class="bg-blue-500 text-white">
          <tr>
            <th class="border">{{ classid }}</th>
            <th class="table-header border px-4 py-2 font-bold" v-for="(timeSlot, index) in timeSlots" :key="index">{{ timeSlot }}</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(entries, date) in classEntries" :key="date">
            <td class="table-cell border px-4">{{ getLithuanianWeekday(date) }}<br/>{{ date }}</td>
            <td v-for="(timeSlot, index) in timeSlots" :key="index" class="table-cell border px-2">
              <div>
                <div v-for="entry in getEntriesInTimeSlot(entries, timeSlot)" :key="entry.subjectid" class="flex flex-col">
                  <p>
                    {{ entry.subjectid }},
                    <span class="font-bold">{{ entry.classroomids.join(', ') }} {{ entry.groupnames.join(', ') }}</span>
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


/* Custom styles to fit 4K display */
.timetable-table {
  width: 100%; /* Take full width */
  border-collapse: collapse; /* Remove gaps between cells */
  //background-color: black; /* Black background for high contrast */
}

.table-header {
  font-size: 0.65rem; /* Larger font for better readability */
  font-weight: lighter; /* Bold header text */
  //background-color: #333; /* Dark gray background for header */
  color: black; /* White text for contrast */
  border: 1px solid white; /* White borders for better visibility */
}

.table-cell {
  font-size: 0.65rem; /* Increase font size for better visibility */
  font-weight: lighter;
  height: 77px; /* Increased height for visibility */
  //text-align: center; /* Center align text */
  //background-color: black; /* Black background */
  color: black; /* White text for contrast */
  border: 0.01rem solid gray; /* White borders between cells */
  //padding: 10px; /* Add some padding for readability */
}
</style>
