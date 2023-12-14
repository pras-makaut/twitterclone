import TweetRepository from "../repository/tweet-repository.js";
import HashtagRepository from "../repository/hashtag-repository.js";


const tweetRepository = new TweetRepository();
const hashtagRepositort = new HashtagRepository();
class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepositort = new HashtagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag)=> tag.substring(1).toLowerCase());
            //storing the tweet
            const tweet = await this.tweetRepository.create(data);
            console.log(tags);
            let alreadyPresentTags = await this.hashtagRepositort.getHashtagByName(tags);
            let textOfPresentTag = alreadyPresentTags.map((tag) =>  tag.text);
            let newTags = tags.filter((tag => !textOfPresentTag.includes(tag)));
            newTags = newTags.map((tag)=>{
                return {
                    text:tag,
                    tweets:[
                        tweet._id
                    ]
                }
            });
            const hashtags = await this.hashtagRepositort.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag)=>{
                tag.tweets.push(tweet._id);
                tag.save();
            })
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }
    async getTweet(tweetId){
        const tweet = await this.tweetRepository.getTweetById(tweetId);
        return tweet;
    }
}

export default TweetService;