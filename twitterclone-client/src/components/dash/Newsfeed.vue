<template>
   <div id="newsfeed">
      <!-- <h2 class="m-t-0 m-b-20">Tweets</h2> -->
      <tweet-list></tweet-list>
   </div>
</template>

<script>
import TweetList from '@/components/dash/TweetList.vue';

export default {
   name: "newsfeed",
   components: {
      tweetList: TweetList,
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>