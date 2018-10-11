<template>
  <div id="app">
     <transition name="fade">
       <router-view/>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/twitterclone.css"></style>
