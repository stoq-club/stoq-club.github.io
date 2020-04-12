import Vue from 'vue'
import VueRouter from 'vue-router'

import MainLayout from '@/layouts/MainLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue')
      },
      {
        path: 'blog/:post',
        name: 'Blog Post',
        component: () => import('@/views/BlogPost.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
