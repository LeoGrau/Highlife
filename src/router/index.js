import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view.vue";
import SignInView from "../highlife/pages/sign-in-view.vue";
import SignUpView from "../highlife/pages/sign-up-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInView,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpView,
    },
  ],
});

export default router;
