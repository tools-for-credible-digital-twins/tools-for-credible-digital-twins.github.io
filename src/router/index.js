import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

for (let docpage of [
  'biblio',
  'clinical-applications',
  'introduction',
  'modelling-tools',
  'publishing',
  'reuse',
  'standards'
]) {
  routes.push({
    path: `/${docpage}/:pageName*`,
    name: docpage,
    component: () => import('../views/DocumentationView.vue')
  })
}

routes.push({
  path: '/:pathMatch(.*)*',
  name: '404',
  meta: { title: 'Tools for Implementing the Virtual Human Twin: Not Found' },
  component: () => import('../views/NotFound.vue')
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
