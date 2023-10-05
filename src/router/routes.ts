// import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Index from "@/views/index/index.vue";
// append import

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
    meta: {
      title: "主页"
    }
  },
  {
    path: "/tools",
    name: "Tools",
    component: () => import("@/views/tools/index.vue"),
    meta: {
      title: "工具"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.vue"),
    meta: {
      title: "关于",
      noCache: true
    }
  },
  // append new router
];

export default routes;
