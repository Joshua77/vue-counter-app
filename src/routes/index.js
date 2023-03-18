import { createRouter, createWebHistory } from "vue-router";
import { HomePage, CounterApp, PageNotFound } from '@/Pages';
//import { HomePage } from "./pages/HomePage"
//import { CounterApp } from "./pages/CounterApp"
//import { PageNotFound } from "./pages/PageNotFound"

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
