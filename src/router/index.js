import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Privacy from '../views/Privacy.vue'
import Photos from '../views/Photos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },   
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    }   
  ]
})

export default router
