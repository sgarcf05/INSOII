import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'
import AddHero from './views/AddHero.vue'
import Register from './views/Register.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/heroes',
      name: 'heroes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Heroes.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
  },
  {
    path: '/addHero',
    name: 'addHero',
    component: AddHero
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }

  ]
})
