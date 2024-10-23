<script setup lang="ts">

const days = ref([
  {
    code: 'MON',
    dayLt: 'Pirmadienis',
    dayEn: 'Monday',
    subject: {title: 'Programavimas Java', teacher: "M. Gžegoževskis", classroom: '104A'}
  },
  {
    code: 'TUE',
    dayLt: 'Antradienis',
    dayEn: 'Tuesday',
    subject: {title: 'Programavimas C++', teacher: "M. Gžegoževskis", classroom: '210'}
  },
  {
    code: 'WED',
    dayLt: 'Trečiadienis',
    dayEn: 'Wednesday',
    subject: {title: 'Programavimas C#', teacher: "M. Gžegoževskis", classroom: '414'}
  },
  {
    code: 'THU',
    dayLt: 'Ketvirtadienis',
    dayEn: 'Thursday',
    subject: {title: 'Programavimas Rust', teacher: "M. Gžegoževskis", classroom: '207'}
  },
  {
    code: 'FRI',
    dayLt: 'Penktadienis',
    dayEn: 'Friday',
    subject: {title: 'Programavimas Go', teacher: "J. Zailskas", classroom: '203'}
  }
]);
</script>

<template>

  <div class="grid gap-2 p-2 grid-cols-4"><!-- Wrapping container for the grid -->
    <div v-for="group in 16" :key="group" class="bg-white shadow-sm rounded-md p-2"><!-- First timetable container -->

      <DataTable :value="days" stripedRows tableStyle="min-width: 25rem">
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-lg font-bold">PI24E - Grupė (Group)</span>
          </div>
        </template>

        <Column field="code" header="Diena (Day)" class="text-sm">
          <template #body="slotProps">
            <div class="text-sm">
            {{ slotProps.data.dayLt }} <br/> ({{ slotProps.data.dayEn }})
            </div>
          </template>
        </Column>
        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p> 1 paskaita</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-lg text-blue-500">
                {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-xs text-gray-500">
                {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>

        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p>1 paskaita (Lecture 1)</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-sm text-gray-500">
                Room: {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-sm text-gray-500">
                Teacher: {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>
        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p>1 paskaita (Lecture 1)</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-sm text-gray-500">
                Room: {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-sm text-gray-500">
                Teacher: {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>
        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p>1 paskaita (Lecture 1)</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-sm text-gray-500">
                Room: {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-sm text-gray-500">
                Teacher: {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>
        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p>1 paskaita (Lecture 1)</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-sm text-gray-500">
                Room: {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-sm text-gray-500">
                Teacher: {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>
        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p>1 paskaita (Lecture 1)</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-sm text-gray-500">
                Room: {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-sm text-gray-500">
                Teacher: {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>
        <Column field="subject">
          <template #header>
            <div class="flex flex-col text-sm"><p>1 paskaita (Lecture 1)</p> <span class="text-blue-500 font-extralight"> 8:30-10:30</span>
            </div>
          </template>
          <template #body="slotProps">

            <div class="text-xs">
              <strong>{{ slotProps.data.subject.title }}</strong> <!-- Subject title -->
              <div class="text-sm text-gray-500">
                Room: {{ slotProps.data.subject.classroom }} <!-- Classroom info -->
              </div>
              <div class="text-sm text-gray-500">
                Teacher: {{ slotProps.data.subject.teacher }} <!-- Teacher info -->
              </div>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>


  </div>




</template>

<style scoped>

</style>