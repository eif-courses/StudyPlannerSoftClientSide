<template>
  <div>
    <h1>To-do List</h1>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.date }} {{ todo.paskaita }} - {{ todo.destytojas }}
      </li>
    </ul>
<!--    <pre>{{ todos }}</pre>-->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ref as dbRef, query, orderByChild, onValue } from 'firebase/database';

const todos = ref([]); // All todos
const filteredTodos = ref([]); // Filtered todos

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

// Fetch todos on component mount
onMounted(() => {
  fetchTodos();
});
</script>
