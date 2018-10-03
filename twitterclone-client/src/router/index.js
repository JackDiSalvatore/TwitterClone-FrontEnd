import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/auth/Auth.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
