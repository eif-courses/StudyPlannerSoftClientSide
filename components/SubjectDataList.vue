<template>
  <div>
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <template #header>
        <div style="text-align:left">
          <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                       display="chip" placeholder="Pasirinkite stulpelius" />
        </div>
      </template>
      <Column field="code" header="Code" />
      <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));
});

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

</script>