import { createRouter, createWebHashHistory } from "vue-router";

import Prepare from "./views/prepare.vue";
import Cs_Life from "./views/cs_life.vue";
import Learn from "./views/learn.vue";
import Career from "./views/careers.vue";
import Cool_Fact from "./views/cool_facts.vue";
import Study from "./views/study.vue";
import Home from "./views/home.vue";
import Start from "./views/start.vue";
import Home from "./views/home.vue"
import Divisions from "./views/Divisions.vue"
import Career_Next from "./views/careers_next.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: "/",
      name: "Home",
      component: Home,

    },
    {
        
      path: "/",
      name: "Study",
      component: Study,
    },
    {
        
      path: "/",
      name: "Career",
      component: Career,
    },
    {
        
      path: "/",
      name: "Cool_Fact",
      component: Cool_Fact,
    },
    {
        
      path: "/",
      name: "Cs_Life",
      component: Cs_Life,
    },
    {
        
      path: "/",
      name: "Learn",
      component: Learn,
    },
    {
        
      path: "/",
      name: "Prepare",
      component: Prepare,
    },
    {
        
      path: "/",
      name: "Start",
      component: Start,
    },

      {
      path: "/",
      name: "Divisions",
      component: Divisions,
    },
    {
        
      path: "/",
      name: "Career_Next",
      component: Career_Next,
    },
  ],
});

export default router;