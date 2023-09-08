<script setup lang="ts">

import {ref, Ref} from "vue";
import router from "@/router";

const drawer: Ref<boolean> = ref(true);
const rail: Ref<boolean> = ref(true);
const items: Ref<Array<any>> = ref([
  {
    title: 'Back office',
    path: '/back-office',
    icon: 'mdi-tools'
  }
]);

function goTo(route: string): void {
  router.push(route);
}
</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </template>
    <v-app-bar-title @click="goTo('/')">Securtruck</v-app-bar-title>>
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
  >
    <v-list density="compact">
      <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :prepend-icon="item.icon"
          :title="item.title"
          @click="goTo(item.path)"
      >
        <template v-if="index === 0"  v-slot:append>
          <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>