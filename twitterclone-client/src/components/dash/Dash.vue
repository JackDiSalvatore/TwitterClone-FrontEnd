<template>
   <div>
   <navbar></navbar>

   <div id="dashboard">
      <b-container>
         <b-row>
            <b-col md="3" sm="5" md-offset="1">
               <sidebar></sidebar>
            </b-col>
            <b-col md="9" sm="7" class="mainView">
               <transition name="fade">
                  <router-view></router-view>
               </transition>
            </b-col>
         </b-row>
      </b-container>
   </div>

   </div>
</template>

<script>
import Navbar from '@/components/dash/Navbar.vue'
import Sidebar from '@/components/dash/Sidebar.vue'

export default {
   name: "dash",
   components: {
      sidebar: Sidebar,
      navbar: Navbar
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dashboard {
   min-height: 100%;
   padding-top: 50px;
   padding-bottom: 50px;
}

.mainView {
   /*border: 1px solid red;*/
   padding: 20px;
}
</style>
