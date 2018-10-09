<template>
   <div>
      <img src="@/assets/Twitter_Logo_Blue.png" class="m-b-20 m-t-20">

      <div id="auth">
         <div class="container">
            <div class="row">
               <div class="col authForum">
                  <h2 class="text-center">Twitter</h2>
                  <p></p>
                  <transition name="fade">
                     <router-view></router-view>
                  </transition>
               </div>
            </div>
         </div>
      </div>

   </div>
</template>

<script>
export default {
   name: "auth"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  text-align: center;
  width: 150px;
  height: 150px;
}

#auth {
   height: 100%;
   display: flex;
   align-items: center;
}

.authForum {
   background: #FFFFFF;
   padding-top: 10px;
   padding-bottom: 15px;
   padding-left: 25%;
   padding-right: 25%;
   border-radius: 10px;
}

</style>
