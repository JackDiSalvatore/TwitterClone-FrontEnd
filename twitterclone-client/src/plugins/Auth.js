var AuthPlugin = {
   setToken: function(token, expiration) {
      localStorage.setItem('authToken', token)
      localStorage.setItem('authTokenExpiration', expiration)
   },

   destroyToken: function() {
      localStorage.removeItem('authToken')
      localStorage.removeItem('authTokenExpiration')
   },

   getToken: function() {
      var token = localStorage.getItem('authToken')
      var expiration = localStorage.getItem('authTokenExpiration')

      if (!token || !expiration)
         return null

      if (Date.now() > parseInt(expiration)) {
         this.destroyToken()
         return null
      } else
         return token

   },

   isLoggedIn: function() {

      if (this.getToken())
         return true
      else
         return false

   }
}

export default function(Vue) {
   Vue.auth = AuthPlugin

   /* Define on prototype to allow for inheritance of $auth */
   Object.defineProperties(Vue.prototype, {
      $auth: {
         get: function() {
            return Vue.auth
         }
      }
   })
}