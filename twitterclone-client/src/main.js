// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import VueResource from 'vue-resource'
import Auth from './plugins/Auth.js'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Auth)

/* Configure AlertifyJs */
alertify.defaults.notifier.position = 'top-left'

/* Configure Route Inteceptors */
Vue.http.interceptors.push(function(request, next) {
   if (request.url[0] === '/') {
      request.url = process.env.API + request.url

      /* authorization headers (see api) */
      var token = Vue.getToken();
      if (token)
        request.headers.set('Authorization','Bearer ' + token)
   }

   next(function(response) {
      if (response.status == 422) {
         response.body.errors.forEach(function(e) {
            alertify.error(e)
         })
      }
   })
})

/* Configure Route Navigation Gaurd */
Router.beforeEach(function(to, from, next) {

  if (to.matched.some(function(record) { return record.meta.requiresGuest })
      && Vue.auth.isLoggedIn()) {
    next({
      path: '/newsfeed'
    })
  } else {
    next()
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})
