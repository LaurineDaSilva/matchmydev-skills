import { createRouter, createWebHistory } from 'vue-router'
import CategoryForm from "../components/CategoryForm.vue"
import UpdateForm from "../components/UpdateForm.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CategoryForm
    },
    {
    path: '/update/:id',
    name: 'updateForm',
    component: UpdateForm
    }
  ]
})

export default router
