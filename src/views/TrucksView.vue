<script setup lang="ts">

import {onMounted, Ref, ref} from "vue";
import type {TruckViewDTO} from "@/models/dtos/TruckViewDTO";
import router from "@/router";

const trucks: Ref<TruckViewDTO[]> = ref([]);

onMounted(async () => {
  const response = await fetch('http://localhost:8080/trucks');
  trucks.value = await response.json();
  trucks.value.forEach(t => t.color = computeColor(t));
});

function computeColor(truck: TruckViewDTO): string {
  if (truck.breakInDetected) return 'red-lighten-1';
  else if (truck.boxBreakInDetected) return 'amber';
  else return '';
}

function goToTruck(id: number): void {
  router.push({ name: 'truck', params: { id: id } })
}

</script>

<template>

  <v-container class=" trucks-container">
    <v-btn
        v-for="truck in trucks"
        height="80"
        min-width="120"
        :color="truck.color"
        @click="goToTruck(truck.idtruck)"
        class="ma-2 pa-2 truck-btn">
      {{ truck.immatriculation }}
      <v-badge
          v-if="truck.breakInCount > 0"
          color="error"
          :content="truck.breakInCount"
          inline
      ></v-badge>
    </v-btn>
  </v-container>
</template>

<style scoped>
.trucks-container {
  display: flex;
  flex-wrap: wrap;

  .truck-btn {
    background-color: rgb(43, 43, 43);
    color: rgb(223, 223, 223);
    text-align: center;
  }
}
</style>