import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Rastreamento from '../views/rastreamento.vue'

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
    name:'Não encotrado'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
