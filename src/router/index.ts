// eslint-disable-next-line import/named
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/index',
    component: () => import('@/views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
