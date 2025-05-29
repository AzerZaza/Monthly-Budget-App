import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

import LandingPage from "@/pages/LandingPage.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/home", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
