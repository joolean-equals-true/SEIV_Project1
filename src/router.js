import { createRouter, createWebHashHistory } from "vue-router";

import Study from "./views/study.vue";
import Home from "./views/home.vue"
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

    
  ],
});

export default router;