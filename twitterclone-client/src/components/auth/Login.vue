<template>
   <div>
      <h3 class="text-center m-b-15">Login</h3>
      <input type="text" name="username" class="form-control m-b-15 authInput" placeholder="Username"
      v-model="user.username">
      <input type="password" name="password" class="form-control m-b-15 authInput" placeholder="Password"
      v-model="user.password">

      <div class="m-t-20">
         <button class="btn btn-lg btn-block authButton" @click="login">Sign In</button>
         <p class="text-center m-t-15">
            Don't have an account? <router-link to="/auth/register">Sign Up</router-link>
         </p>
      </div>
   </div>
</template>

<script>
export default {
   name: "login",
   data: function() {
      return {
         user: {
            username: "",
            password: ""
         }
      }
   },
   methods: {
      login: function() {
         this.$http.post(process.env.API + '/auth', this.user)
         .then( function(res) {
            /* 14400000 = four hours in mili seconds */
            this.$auth.setToken(res.body.token, Date.now() + 14400000 )
            this.$router.push('/newsfeed')
         })
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
