import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: { name: "WordleFive" } },
  {
    name: "wordleFour",
    path: "/four-letters",
    component: () => import("./views/WordleFour.vue"),
  },
  {
    name: "wordleFive",
    path: "/five-letters",
    component: () => import("./views/WordleFive.vue"),
  },
  {
    name: "wordleSix",
    path: "/six-letters",
    component: () => import("./views/WordleSix.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
