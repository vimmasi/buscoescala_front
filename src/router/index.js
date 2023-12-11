import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import MilitarView from '../views/MilitarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/novo_militar',
      name: 'militares',
      component: () => import('../views/MilitarView.vue')
    }
  ]
})

export default router