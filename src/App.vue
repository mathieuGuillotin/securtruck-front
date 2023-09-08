<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<template>
    <v-layout class="rounded rounded-md">
      <Header />

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
</template>

<style scoped>
</style>