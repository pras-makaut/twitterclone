import Tweet from "../models/tweet.js";

class TweetRepository {
    async create(data){
        try {
            let tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllTweets(){
        try {
            let tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTweetById(id){
        try {
            let tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteTweetById(id){
        try {
            let tweet = await Tweet.deleteOne(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetRepository;