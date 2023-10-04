// import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Index from "@/views/index/index.vue";

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "root",
//     component: Layout,
//     redirect: "Index",
//     children: [
//       {
//         path: "index",
//         name: "Index",
//         component: Index,
//         meta: {
//           title: "主页"
//         }
//       },
//       {
//         path: "demo",
//         name: "Demo",
//         component: () => import("@/views/demo/index.vue"),
//         meta: {
//           title: "示例"
//         }
//       },
//       {
//         path: "tools",
//         name: "Tools",
//         component: () => import("@/views/tools/index.vue"),
//         meta: {
//           title: "工具"
//         }
//       },
//       {
//         path: "about",
//         name: "About",
//         component: () => import("@/views/about/index.vue"),
//         meta: {
//           title: "关于",
//           noCache: true
//         }
//       }
//     ]
//   }
// ];
const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    name: "Index",
    component: Index,
    meta: {
      title: "主页"
    }
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@/views/demo/index.vue"),
    meta: {
      title: "示例"
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
  }
];

export default routes;
