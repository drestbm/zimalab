import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Vacancy from '../views/Vacancy.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/vacancy',
    name: 'Vacancy',
    component: Vacancy
  },
]

const router = new VueRouter({
  routes
})

export default router
