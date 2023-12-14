import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtags.js";
import TweetRepository from "./repository/tweet-repository.js";
import tweeRoutes from './router/index.js'
const tweetRepository = new TweetRepository();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',tweeRoutes);

app.listen(3000,async ()=>{
    console.log("server started");
    connect();
})