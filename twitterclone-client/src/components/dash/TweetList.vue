<template>
    <div id="tweetlist">
        <div id="tweetsWraper">
            <tweet v-for="tweet in tweets" v-bind:tweet="tweet"></tweet>
        </div>
    </div>
</template>

<script>
import Tweet from '@/components/dash/Tweet.vue';

export default {
    name: 'tweetlist',
    components: {
        tweet: Tweet,
    },
    created: function () {
        this.tweets = []
        this.getTweets()
    },
    data: function () {
        return {
            tweets: []
        }
    },
    methods: {
        getTweets: function () {
            this.$http.get('/beeps')
                .then(function (res) {
                    this.tweets = res.body.data
                })
        }
    }
}
</script>

<style scoped>
#tweetsWraper {
    margin: 0 -20px;
}

#tweetsLoading {
    padding: 40px;
}

#tweetsLoading i {
    font-size: 40px;
}
</style>