<script setup lang="ts">
import { ref } from 'vue';

// Sample timetable data structure with multiple groups
const timetables = ref([
  {
    group: 'Class A',
    schedule: {
      '08:00 - 09:00': { Monday: 'Math', Tuesday: 'Algebra', Wednesday: 'Biology', Thursday: 'English', Friday: 'Chemistry' },
      '09:00 - 10:00': { Monday: 'Physics', Tuesday: 'Chemistry', Wednesday: 'Drama', Thursday: 'History', Friday: 'Art' },
      '10:00 - 11:00': { Monday: 'English', Tuesday: 'History', Wednesday: 'Math', Thursday: 'Music', Friday: 'Biology' },
      '11:00 - 12:00': { Monday: 'PE', Tuesday: 'Math', Wednesday: 'Economics', Thursday: 'Chemistry', Friday: 'Physics' },
      '12:00 - 13:00': { Monday: 'History', Tuesday: 'Biology', Wednesday: 'Art', Thursday: 'Drama', Friday: 'Chemistry' },
      '13:00 - 14:00': { Monday: 'Geography', Tuesday: 'Physics', Wednesday: 'History', Thursday: 'Math', Friday: 'English' },
      '14:00 - 15:00': { Monday: 'Art', Tuesday: 'Economics', Wednesday: 'PE', Thursday: 'Geography', Friday: 'Drama' },
    },
  },
  {
    group: 'Class B',
    schedule: {
      '08:00 - 09:00': { Monday: 'Biology', Tuesday: 'Geography', Wednesday: 'Math', Thursday: 'English', Friday: 'Chemistry' },
      '09:00 - 10:00': { Monday: 'History', Tuesday: 'PE', Wednesday: 'Physics', Thursday: 'Art', Friday: 'Music' },
      '10:00 - 11:00': { Monday: 'Drama', Tuesday: 'Math', Wednesday: 'Chemistry', Thursday: 'Economics', Friday: 'Biology' },
      '11:00 - 12:00': { Monday: 'Math', Tuesday: 'Biology', Wednesday: 'History', Thursday: 'PE', Friday: 'English' },
      '12:00 - 13:00': { Monday: 'Art', Tuesday: 'Geography', Wednesday: 'Drama', Thursday: 'Physics', Friday: 'Math' },
      '13:00 - 14:00': { Monday: 'English', Tuesday: 'History', Wednesday: 'Music', Thursday: 'Chemistry', Friday: 'Drama' },
      '14:00 - 15:00': { Monday: 'Economics', Tuesday: 'Math', Wednesday: 'Art', Thursday: 'Geography', Friday: 'History' },
    },
  },
  {
    group: 'Class C',
    schedule: {
      '08:00 - 09:00': { Monday: 'Math', Tuesday: 'Chemistry', Wednesday: 'Biology', Thursday: 'Physics', Friday: 'History' },
      '09:00 - 10:00': { Monday: 'PE', Tuesday: 'Geography', Wednesday: 'Drama', Thursday: 'Art', Friday: 'Math' },
      '10:00 - 11:00': { Monday: 'English', Tuesday: 'History', Wednesday: 'Music', Thursday: 'Biology', Friday: 'Economics' },
      '11:00 - 12:00': { Monday: 'History', Tuesday: 'Drama', Wednesday: 'Physics', Thursday: 'PE', Friday: 'Art' },
      '12:00 - 13:00': { Monday: 'Geography', Tuesday: 'Chemistry', Wednesday: 'English', Thursday: 'Math', Friday: 'Biology' },
      '13:00 - 14:00': { Monday: 'Art', Tuesday: 'Economics', Wednesday: 'History', Thursday: 'Drama', Friday: 'Chemistry' },
      '14:00 - 15:00': { Monday: 'Biology', Tuesday: 'Math', Wednesday: 'PE', Thursday: 'Physics', Friday: 'English' },
    },
  },
  {
    group: 'Class D',
    schedule: {
      '08:00 - 09:00': { Monday: 'English', Tuesday: 'History', Wednesday: 'Math', Thursday: 'Art', Friday: 'Biology' },
      '09:00 - 10:00': { Monday: 'Drama', Tuesday: 'Geography', Wednesday: 'Physics', Thursday: 'Chemistry', Friday: 'Math' },
      '10:00 - 11:00': { Monday: 'PE', Tuesday: 'History', Wednesday: 'Economics', Thursday: 'Music', Friday: 'Art' },
      '11:00 - 12:00': { Monday: 'Chemistry', Tuesday: 'Math', Wednesday: 'Drama', Thursday: 'Biology', Friday: 'Geography' },
      '12:00 - 13:00': { Monday: 'Physics', Tuesday: 'PE', Wednesday: 'English', Thursday: 'History', Friday: 'Drama' },
      '13:00 - 14:00': { Monday: 'Art', Tuesday: 'Economics', Wednesday: 'Chemistry', Thursday: 'Math', Friday: 'Physics' },
      '14:00 - 15:00': { Monday: 'Geography', Tuesday: 'Biology', Wednesday: 'History', Thursday: 'PE', Friday: 'English' },
    },
  },
]);
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <!-- Repeat this block for each main column (4 in total) -->
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, <span class="font-bold">420A</span></div>
              <div class="border-t">Duomenų bazių valdymas,  <span class="font-bold">420A</span></div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java,  <span class="font-bold">420A</span></div>
              <div class="border-t">Duomenų bazių valdymas,  <span class="font-bold">420A</span></div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java,  <span class="font-bold">420A</span></div>
              <div class="border-t">Duomenų bazių valdymas,  <span class="font-bold">420A</span></div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java,  <span class="font-bold">420A</span></div>
              <div class="border-t">Duomenų bazių valdymas,  <span class="font-bold">420A</span></div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java,  <span class="font-bold">420A</span></div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos,  <span class="font-bold">420A</span></div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java,  <span class="font-bold">420A</span></div>
              <div class="border-t">Duomenų bazių valdymas,  <span class="font-bold">420A</span></div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos,  <span class="font-bold">420A</span></div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <table class="timetable-table min-w-full border-collapse">
        <thead class="bg-gray-200">
        <tr>
          <th class="border text-blue-600">PI24A</th>
          <th class="table-header border px-4 py-2">8:30-10:00</th>
          <th class="table-header border px-4 py-2">10:15-11:45</th>
          <th class="table-header border px-4 py-2">12:30-14:00</th>
          <th class="table-header border px-4 py-2">14:15-15:45</th>
          <th class="table-header border px-4 py-2">16:00-17:30</th>
          <th class="table-header border px-4 py-2">17:45-19:15</th>
          <th class="table-header border px-4 py-2">19:30-20:45</th>
        </tr>
        </thead>
        <tbody>
        <!-- Weekdays -->
        <tr>
          <td class="table-cell border px-4">Pirmadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>

        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Antradienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Trečiadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Ketvirtadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="table-cell border px-4 py-2">Penktadienis</td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>
              <div class="border-t">Duomenų bazių valdymas, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Programavimas kalba Java, 420A</div>

            </div>
          </td>
          <td class="table-cell border px-2">
            <div class="flex flex-col">
              <div>Incidentai elektroninėje erdvėje ir jų tyrimo metodikos, 317A</div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>

</template>

<style scoped>
/* Custom styles to fit 4K display */
.timetable-table {
  width: 100%; /* Take full width */
}
.table-header {
  font-size: 0.65rem; /* Larger font for header */
}
.table-cell {
  font-size: 0.65rem; /* Larger font for cells */
  height: 77px; /* Increased height for better visibility */
}
</style>
