<template>
  <div>

    <DataTable :value="subjects" :filters="filters"  ref="dt" size="small" showGridlines class="p-8"
               :globalFilterFields="['name', 'category', 'credits', 'evaluationForm', 'semester']">
      <template #header>

        <div class="flex flex-row gap-3 mt-2">

          <div class="card flex gap-4">
            <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Studijų programa"
                    class="w-full"/>
            <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Tvarkaraštis"
                    class="w-full"/>

          </div>




          <!--          <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header"-->
          <!--                       @update:modelValue="onToggle"-->
          <!--                       display="chip" placeholder="Pasirinkite stulpelius" class="mt-2 mr-4"/>-->
          <Button icon="pi pi-external-link" label="Eksportuoti į Excel" @click="exportCSV($event)"/>

        </div>
        <div class="p-4 pl-0">
          <IconField>
            <InputIcon>
              <i class="pi pi-search"/>
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Ieškoti pagal pavadinimą" class="w-full"/>
          </IconField>
        </div>
      </template>

      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>


    </DataTable>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {SubjectService} from '~/service/SubjectService';
import {FilterMatchMode, FilterOperator} from '@primevue/core/api';
import type {Subject} from "~/data/subject";

onMounted(() => {
  subjects.value = SubjectService.getSubjects();
});

const subjects = ref<Subject[]>([]);


const filters = ref();
filters.value = {
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
}


const columns = ref([
  {field: 'name', header: 'Dalyko (modulio) pavadinimas'},
  {field: 'semester', header: 'S'},
  {field: 'credits', header: 'Kr'},
  {field: 'evaluationForm', header: 'V'},
  {field: 'lectureHours', header: 'P'},
  {field: 'practiceHours', header: 'Pr'},
  {field: 'remoteLectureHours', header: 'NP'},
  {field: 'remotePracticeHours', header: 'NPr'},
  {field: 'selfStudyHours', header: 'S'},
  {field: 'lecturesCount', header: 'LC'},
  {field: 'finalProjectExamCount', header: 'FP'},
  {field: 'otherContactHoursCount', header: 'OC'},
  {field: 'consultationCount', header: 'CC'},
  {field: 'gradingNumberCount', header: 'GN'},
  {field: 'gradingHoursCount', header: 'GH'},
  {field: 'homeworkHoursCount', header: 'HH'},
  {field: 'practiceReportHoursCount', header: 'PR'},
  {field: 'remoteTeachingHoursCount', header: 'RT'},
  {field: 'courseWorkHoursCount', header: 'CW'},
  {field: 'examHours', header: 'EH'},
  {field: 'otherNonContactCount', header: 'ON'},
  {field: 'lecturers', header: 'Lecturers'},
]);
const selectedColumns = ref(columns.value);

const onToggle = (val) => {
  selectedColumns.value = columns.value.filter(col => val.includes(col));
};


const dt = ref();
const exportCSV = () => {
  dt.value.exportCSV();
};


const selectedCity = ref();
const cities = ref([
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
]);

</script>