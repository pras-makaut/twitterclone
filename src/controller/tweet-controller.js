import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res) => {
    try {
        const data = req.body;
        const response = await tweetService.create(data);
        return res.status(201).json({
            success:true,
            message:'succefully create a tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error Encountered',
            data:{},
            err:error
        })
    }
}

export const getTweet = async (req,res) => {
    try {
        const id = req.params.id;
        const response = await tweetService.getTweet(id);
        return res.status(201).json({
            success:true,
            message:'succefully get the tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error Encountered',
            data:{},
            err:error
        })
    }
    

}