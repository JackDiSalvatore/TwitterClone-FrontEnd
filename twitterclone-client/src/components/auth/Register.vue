<template>
   <div>
      <h3 class="text-center m-b-15">Register</h3>
      <input type="email" name="email" class="form-control m-b-15 authInput" placeholder="Email"
      v-model="user.email">
      <input type="text" name="username" class="form-control m-b-15 authInput" placeholder="Username"
      v-model="user.username">
      <input type="password" name="password" class="form-control m-b-15 authInput" placeholder="Password"
      v-model="user.password">

      <div class="m-t-20">
         <button class="btn btn-lg btn-block authButton" @click="register">Register</button>
         <p class="text-center m-t-15">
            Already have an account? <router-link to="/auth/login">Login</router-link>
         </p>
      </div>
   </div>
</template>

<script>
export default {
   name: "register",
   data: function() {
      return {
         user: {
            email: "",
            username: "",
            password: ""
         }
      }
   },
   methods: {
      register: function() {
         console.log(process.env.API + '/users')
         this.$http.post(process.env.API + '/users', this.user)
         .then(function (res) {
            alertify.success('Success, you can now login');
            this.$router.push('/auth')
         })
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
