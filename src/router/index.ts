import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/homePage",
    name: "",
    meta: {
      descript: "",
      pass: true,
    },
  },
  {
    path: "/homePage",
    component: () => import("@/views/homePage.vue"),
    name: "homePage",
    meta: {
      descript: "主页",
      pass: true,
    },
  },
];

const asyncRoutes: Array<RouteRecordRaw> = [];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

export { router, asyncRoutes };
