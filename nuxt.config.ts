// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      firebaseConfig: {
        apiKey: 'AIzaSyCRYVIHl_orktaBMwsmlQtMcOaeGO0FTQI',
        authDomain: 'eif-courses.firebaseapp.com',
        databaseURL: 'https://eif-courses.firebaseio.com',
        projectId: 'eif-courses',
        storageBucket: 'eif-courses.appspot.com',
        messagingSenderId: '535363326769',
        appId: '1:535363326769:web:cc13dce33cff5884925610'
      }
    }
  },

  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],


    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: 'AIzaSyCRYVIHl_orktaBMwsmlQtMcOaeGO0FTQI',
    //       authDomain: 'eif-courses.firebaseapp.com',
    //       databaseURL: 'https://eif-courses.firebaseio.com',
    //       projectId: 'eif-courses',
    //       storageBucket: 'eif-courses.appspot.com',
    //       messagingSenderId: '535363326769',
    //       appId: '1:535363326769:web:cc13dce33cff5884925610'
    //     },
    //     services: {
    //       realtimeDb: true // Just as example. Can be any other service.
    //     }
    //   }
    // ]



  css: ['~/assets/css/tailwind.css',
    'primeicons/primeicons.css'],

  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }
  }
})