import { createRouter, createWebHistory } from 'vue-router'
import TrucksView from "@/views/TrucksView.vue";
import BackOffice from "@/views/BackOfficeView.vue";
import TruckView from "@/views/TruckView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trucks',
      component: TrucksView
    },
    {
      path: '/truck/:id',
      name: 'truck',
      component: TruckView
    },
    {
      path: '/back-office',
      name: 'back-office',
      component: BackOffice
    }
  ]
});

export default router;
