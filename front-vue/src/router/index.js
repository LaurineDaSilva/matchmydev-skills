import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( "../components/CategoryForm.vue")
    },
    {
    path: '/update/:id',
    name: 'updateForm',
    component: () => import("../components/UpdateForm.vue")
    }
  ]
})

export default router
