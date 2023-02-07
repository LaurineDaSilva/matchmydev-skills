<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header class="bg-black  fixed-top mb-3" id="header">
   <Navbar/>
  </header>
  <body></body>

  <RouterView />
</template>

