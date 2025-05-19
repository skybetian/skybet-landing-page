import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
import Careers from '../pages/careers/index.vue'
import CareersDetails from '../pages/careers-details/index.vue'
import ContactUs from '../pages/contact-us/index.vue'

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
  },
  {
    path: '/careers-details/:id',
    name: 'careers-details',
    component: CareersDetails
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router