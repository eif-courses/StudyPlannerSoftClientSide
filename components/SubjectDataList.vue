<template>
  <div>

    <Toolbar>
      <template #start>
        <div class="card flex gap-4 ml-6">
        <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Studijų programa"
                class="w-full"/>
        <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Tvarkaraštis"
                class="w-full"/>
        </div>
      </template>

      <template #end>
        <div class="card flex mr-6">
        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" customUpload chooseLabel="Įkelti dalykus" class="mr-2" auto :chooseButtonProps="{ severity: 'secondary' }" />
        <Button label="Eksportuoti į Excel" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
        </div>
      </template>
    </Toolbar>

    <DataTable
        v-model:editingRows="editingRows"
        class="text-md ml-6 mr-6 mb-6"
        dataKey="id"
        striped-rows
        :value="subjects"
        :filters="filters"
        editMode="row"
        @row-edit-save="onRowEditSave"
        ref="dt"
        size="small"
        tableStyle="min-width: 70rem"
        :globalFilterFields="['name', 'category', 'credits', 'evaluationForm', 'semester']"
    >
      <template #header>

        <div class="pl-1 mt-3 mb-3">
          <IconField>
            <InputIcon>
              <i class="pi pi-search"/>
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Ieškoti pagal pavadinimą" class="w-full"/>
          </IconField>
        </div>
      </template>

      <Column v-for="(col, index) of selectedColumns"
              :field="col.field"
              :header="col.header"
              sortable
              :key="col.field + '_' + index"

      >
        <template #editor="{ data, field }">
          <InputText v-if="field === 'name'" v-model="data[field]" fluid />
<!--          <InputNumber v-if="field === 'credits'" v-model="data[field]" mode="decimal" minFractionDigits="0" />-->
<!--          <Select v-if="field === 'lecturers'" v-model="data[field]" :options="lecturers" optionLabel="label" optionValue="value" placeholder="Choose Form" fluid />-->
        </template>


      </Column>
      <Column :rowEditor="true" ></Column>


    </DataTable>
  </div>
</template>

<script setup lang="ts">
import {SubjectService} from '~/service/SubjectService';
import {FilterMatchMode, FilterOperator} from '@primevue/core/api';
import type {Subject} from "~/data/subject";

onMounted(() => {
  subjects.value = SubjectService.getSubjects();
});

const subjects = ref<Subject[]>([]);

const editingRows = ref([]);
const statuses = ref([
  { label: 'In Stock', value: 'INSTOCK' },
  { label: 'Low Stock', value: 'LOWSTOCK' },
  { label: 'Out of Stock', value: 'OUTOFSTOCK' }
]);
const filters = ref();
filters.value = {
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
}
const onRowEditSave = (event) => {
  let { newData, index } = event;
  subjects.value[index] = newData;
};

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
  {field: 'lecturers', header: 'D'},
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