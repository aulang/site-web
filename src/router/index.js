import Vue from 'vue'
import VueRouter from 'vue-router'

import { getConfig } from '@/api/config'
import { saveConfig, loadConfig } from '@/store/localstore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    beforeEnter: (to, from, next) => {
      if (loadConfig()) {
        next();
        return;
      }
      getConfig().then(response => {
        if (response.code === 0) {
          saveConfig(response.data);
        }
        next();
      }, () => {
        next();
      });
    }
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('../views/Page.vue'),
    props: route => ({
      category: route.query.category
    })
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/Article.vue'),
    props: route => ({
      id: route.params.id
    })
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
