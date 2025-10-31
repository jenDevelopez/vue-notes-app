import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/notes/:note",
      name: "note",
      component: Note,
    },
  
  ]
});

export default router;