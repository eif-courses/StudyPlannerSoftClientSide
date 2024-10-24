<template>
  <div>
    <h1>To-do List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.date}} {{ todo.paskaita }} - {{ todo.destytojas }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { get, ref as dbRef, query, orderByChild, onValue } from 'firebase/database';

const todos = ref([]);

// Access Firebase database via $firebaseDb
const { $firebaseDb } = useNuxtApp();

const fetchTodos = () => {
  const dbRefPath = dbRef($firebaseDb, 'user-posts');
  const q = query(dbRefPath, orderByChild('paskaita'));

  // Fetch data from the Firebase Realtime Database
  onValue(q, (snapshot) => {
    const temp = [];
    snapshot.forEach((data) => {
      const obj = data.val();
      console.log(obj);
      temp.push({
        id: data.key,
        date: obj.date,
        paskaita: obj.paskaita,
        destytojas: obj.destytojas,
        auditorija: obj.auditorija,
        grupe: obj.grupe.replace('<b>', '').replace('</b>', ''),
      });
    });
    todos.value = temp;
  });
};

// Fetch todos on component mount
onMounted(() => {
  fetchTodos();
});
</script>
