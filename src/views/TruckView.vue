<script setup lang="ts">

import {onMounted, Ref, ref} from "vue";
import type {TruckViewDTO} from "@/models/dtos/TruckViewDTO";

const trucks: Ref<TruckViewDTO[]> = ref([]);

onMounted(async () => {
});

</script>

<template>
  <div id="truck">
    <div id="left">
      <v-sheet :elevation="4" id="controller" border>controller</v-sheet>

      <div id="tanks">
        <v-sheet :elevation="4" id="left-tank" border>left-tank</v-sheet>
        <v-sheet :elevation="4" id="right-tank" border>right-tank</v-sheet>
      </div>
    </div>

    <div id="right">
      <v-sheet :elevation="4" id="events" border>events</v-sheet>

      <v-sheet :elevation="4" id="notes" border>notes</v-sheet>
    </div>
  </div>

</template>

<style scoped>
#truck {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;

  #left {
    display: flex;
    flex-grow: 3;
    flex-direction: column;
    gap: 10px;

    #tanks {
      display: flex;
      gap: 10px;

      .v-sheet {
        flex-grow: 1;
      }
    }
  }

  #right {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 10px;
  }
}


</style>