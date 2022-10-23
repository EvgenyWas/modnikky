import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior({ name }) {
    if (name === 'product') {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/pages/ProductPage.vue')
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('@/pages/BagPage.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/pages/WishlistPage.vue')
    }
  ]
})

export default router
