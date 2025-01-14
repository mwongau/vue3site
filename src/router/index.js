import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Privacy from '../views/Privacy.vue'
import Photos from '../views/Photos.vue'

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cv',
      component: CV
    },
    {
      path: '/privacy',
      component: Privacy
    },   
    {
      path: '/photos',
      component: Photos
    }   
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
