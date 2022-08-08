import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '*',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
  ,
  {
    path: '/statistics',
    name: 'Estatistics',
    meta: {
      auth: true
    },
    component: () => import('../views/Statistics.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth) {
    if(localStorage.getItem('auth')){
      next()
    }else {
      next('/login')
    }
  } else {
    if(localStorage.getItem('auth')){
      next('/')
    }else {
      next()
    }
  }
})

export default router
