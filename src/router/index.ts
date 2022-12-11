import { COOKIES } from "@/config";
import HomePage from "@/pages/HomePage.vue";
import { getCookie } from "@/utils";
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";

function checkAuthentication(to: RouteLocationNormalized) {
  const isAuth = Boolean(getCookie(COOKIES.AUTHORIZED));
  to.meta.isAuth = isAuth;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior({ name }) {
    if (name === "product") {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
      beforeEnter: [checkAuthentication],
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("@/pages/ProductPage.vue"),
    },
    {
      path: "/bag",
      name: "bag",
      component: () => import("@/pages/BagPage.vue"),
      beforeEnter: [checkAuthentication],
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("@/pages/WishlistPage.vue"),
    },
    {
      path: "/authentication",
      name: "authentication",
      component: () => import("@/pages/AuthPage.vue"),
    },
  ],
});

export default router;
