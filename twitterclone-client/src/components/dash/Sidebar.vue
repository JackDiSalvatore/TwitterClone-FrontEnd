<template>
   <div id="sidebar" class="text-center">

      <h4>Username</h4>

      <div class="tweet m-t-20 m-b-20">
         <textarea class="form-control m-b-15" rows="10" placeholder="tell the world something..." maxlength="320"></textarea>
         <p class="text-muted">320 chareacters remaining</p>
         <p class="text-center no-margin"><button class="btn">Tweet!</button></p>
      </div>

   </div>
</template>

<script>
export default {
   name: "sidebar"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebar {
   /*border: 1px solid red;*/
}

.tweet {
   /*background: #f0f0f0;*/
   margin: 20px -20px;
   padding: 20px;
}

.tweet textarea {
   background-color: #f4f4f4;
   /*box-shadow: none;*/
   border: 1px solid #f4f4f4;
   border-radius: 12px;
   resize: vertical;
}

.btn {
   color: #FFFFFF;
   background: #4BA1EC;
}
.btn:hover {
   color: #4BA1EC;
   background: #FFFFFF;
   border-color: #4BA1EC;
}

p.text-muted {
   font-size: 0.8em;
}
</style>
