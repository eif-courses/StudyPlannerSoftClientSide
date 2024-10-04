<template>
  <div>

    <div class="card flex gap-4 p-4">
      <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Studijų programa"
              class="w-full md:w-56"/>
      <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Kursas"
              class="w-full md:w-56"/>
      <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Grupė"
              class="w-full md:w-56"/>
      <Select v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Tvarkaraštis"
              class="w-full md:w-56"/>

    </div>


    <DataTable :value="products" size="small" showGridlines class="pl-5" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
      <template #header>

        <div class="d-flex justify-between align-items-center">

          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </IconField>

            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header"
                         @update:modelValue="onToggle"
                         display="chip" placeholder="Pasirinkite stulpelius" class="mt-2 mr-4"/>
            <Button icon="pi pi-external-link" label="Eksportuoti į Excel" @click="exportCSV($event)"/>

        </div>
      </template>
      <Column field="code" header="Code"/>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header"
              :key="col.field + '_' + index"></Column>


    </DataTable>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {ProductService} from '@/service/ProductService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));


});

const filters = ref();
filters.value = {
  global: {value: null, matchMode: FilterMatchMode.CONTAINS},
}


const columns = ref([
  {field: 'name', header: 'Name'},
  {field: 'category', header: 'Category'},
  {field: 'quantity', header: 'Quantity'}
]);
const selectedColumns = ref(columns.value);
const products = ref();
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