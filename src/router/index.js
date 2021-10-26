import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Friends from '../views/Friends'
import Search from '../views/Search'
import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/cart',
    component: Cart
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
