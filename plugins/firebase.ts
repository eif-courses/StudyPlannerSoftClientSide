import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig().public.firebaseConfig;

    // Initialize Firebase
    const firebaseApp = initializeApp(config);
    const database = getDatabase(firebaseApp);

    // Provide Firebase database instance to use across the app
    nuxtApp.provide('firebaseDb', database);
});
