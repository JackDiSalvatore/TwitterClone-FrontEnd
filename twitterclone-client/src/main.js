// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

alertify.defaults.notifier.position = 'top-left'

Vue.http.interceptors.push(function(request, next) {
   if (request.url[0] === '/') {
      request.url = process.env.API + request.url
   }
   next(function(response) {
      if (response.status == 422) {
         response.body.errors.forEach(function(e) {
            alertify.error(e)
         })
      }
   })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})