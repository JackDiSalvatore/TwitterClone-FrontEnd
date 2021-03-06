import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/auth/Auth.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import Newsfeed from '@/components/dash/Newsfeed.vue'
import Dash from '@/components/dash/Dash.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dash',
      component: Dash,
      redirect: '/newsfeed',
      children: [
         {
            path: 'newsfeed',
            component: Newsfeed,
            meta: { requiresAuth: true }
         }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      redirect: '/auth/login',
      children: [
         {
            path: 'login',
            component: Login,
            meta: { requiresGuest: true }
         },
         {
            path: 'register',
            component: Register,
            meta: { requiresGuest: true }
         }
      ]
    }
  ]
})
