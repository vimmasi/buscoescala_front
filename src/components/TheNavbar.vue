<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="flex justify-between p-4 shadow-md text-2xl fixed w-screen bg-shark-950 text-shark-100">
        <a href="/"><img src="../assets/icons/buscoescala.png" alt="Busco Escala logo" class="h-10"></a>
        <div class="flex gap-8">
            <router-link to="/" class="hover:text-feijoa-300">Início</router-link>
            <router-link to="/novo_militar" class="hover:text-feijoa-300">Novo Militar</router-link>
        </div>
        <div></div>
    </nav>
</template>

<style scoped>
.router-link-active {
    color: #a2d78f;
}
</style>