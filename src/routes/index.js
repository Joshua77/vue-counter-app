import { createRouter, createWebHistory } from "vue-router";
import { HomePage, CounterApp, PageNotFound } from "@/pages";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/counter",
    name: "CounterApp",
    component: CounterApp,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
