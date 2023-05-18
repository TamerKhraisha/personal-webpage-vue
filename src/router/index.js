import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/modules/home/views/Home.vue";
import Experience from "@/modules/experience/views/experience.vue";
import Skills from "@/modules/skills/views/skills.vue";
import academia from "@/modules/academia/views/academia.vue";

const FourOFour = () => import("@/views/The404");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills
  },
  {
    path: "/academia",
    name: "academia",
    component: academia
  },
  {
    path: "*",
    name: "notfound",
    component: FourOFour
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
