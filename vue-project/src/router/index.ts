import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "@/layouts/HomeLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import LandingPage from "@/pages/LandingPage.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: LandingPage }],
  },
  {
    path: "/home",
    component: HomeLayout,
    children: [{ path: "", component: HomePage }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
