import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
const app = express();


app.listen(3000,async ()=>{
    console.log("server started");
    connect();
    Tweet.create({
        content:"This is my first tweet",
        likes:25,
        numberOfRetweets:5,
        Comment:"this is my first comment"
    })
})