import { createRouter, createWebHistory } from 'vue-router'
import CategoryForm from "../components/CategoryForm.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CategoryForm
    },
  ]
})

export default router
