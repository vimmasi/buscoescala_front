<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <TheNavbar />
  <div class="text-shark-100">
    <RouterView />
  </div>
</template>

<style scoped></style>
