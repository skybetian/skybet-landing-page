import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
import Careers from '../pages/careers/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/careers',
    name: 'careers',
    component: Careers
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router