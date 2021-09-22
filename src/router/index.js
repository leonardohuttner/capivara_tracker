import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home.vue'
import Rastreamento from '../views/rastreio.vue'
import NotFound from '../views/not_found.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/rastreamento/:codigo',
    name: 'Rastreamento',
    component: Rastreamento
  },
  {
    path:'*',
    name:'Não encotrado',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
