<template>
    <div class="tweet">


        <b-row>
            <b-col xs="1 " md="1" class="text-center">
                <router-link :to="'/profile/'+tweet.author.username">
                    <img :src="tweet.author.avatar" class="img-circle no-margin">
                </router-link>
            </b-col>

            <b-col xs="12">
                <b-row>
                    @<router-link id="username" :to="'/profile/'+tweet.author.username">{{tweet.author.username}}</router-link>
                    <i id="dot" class="fa fa-circle fa-xs"></i>
                    <small class="text-muted"> {{tweet.created_at}} </small>
                </b-row>

                <b-row>
                    <p :class="{
                        small: tweet.text.length >= 150,
                        medium: tweet.text.length <150 && tweet.text.length > 50,
                        big: tweet.text.length <= 50
                    }">
                        {{tweet.text}}
                    </p>
                </b-row>
            </b-col>
        </b-row>

        <div class="tweetFooter">
            <span class="pull-right">
                <button class="btn" @click="likeTweet" :class="[tweet.liked ? 'btn-primary' : ' btn-default']">
                    <i class="fa fa-heart" :class="[tweet.liked ? 'fa-heart' : 'fa-heart-o']"></i>
                    {{tweet.likes}}
                </button>
                <i class="fa fa-calendar"></i> <i class="fa fa-clock-o"></i>
            </span>
        </div>

    </div>
</template>



<script>
export default {
    name: 'tweet',
    props: {
        tweet: {}
    },
    methods: {
        likeTweet: function () {

        }
    }
}
</script>



<style scoped>
    .tweet {
        border-bottom: 1px solid #d6d6d6;
        padding: 40px 20px 0px;
    }

    .tweet p {
        margin: 0;
    }

    .tweet img {
        max-width: 100%;

    }

    .tweet .row {
        display: flex;
        align-items: center;
    }

    .tweet #username {
        text-align: left;
        display: float;
        color: black;
        font-weight: bold;
    }
    .tweet #username:hover {
        color: #4BA1EC;
    }

    #dot {
        padding-left: 7px;
        padding-right: 7px;
        font-size: 4px;
        color: #b7b7b7;
    }

    .small {
        font-size: 13px;
    }

    .medium {
        font-size: 18px
    }

    .big {
        font-size: 23px;
    }

    .tweetFooter {
        padding-bottom: 40px;
        color: #a0a0a0;
        /*margin: 40px -20px 0;*/
        /*padding: 10px 20px;*/
    }

    .tweetFooter .btn-default {
        color: #a0a0a0;
    }

    .tweetFooter .btn-primary {

    }

    .tweetFooter strong {
        margin-top: 7px;
    }

    i.fa.fa-calendar{
        padding: 6px 12px 6px 12px;
    }

    i.fa.fa-clock-o {
        padding: 6px 12px 6px 12px;
    }
</style>
