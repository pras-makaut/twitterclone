import CommentsRepository from "../repository/comment-repository.js";
import LikeRepository from "../repository/like-repository.js";
import TweetRepository from "../repository/tweet-repository.js";


class LikeService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.likeRepositort = new LikeRepository();
        this.commentRepository = new CommentsRepository();
    }

    async togglingLike({modelId,modelType,userId}){
        console.log(modelId,modelType,userId)
        try {
            let likabel;
            if(modelType == 'Tweet') {
                likabel = await this.tweetRepository.get(modelId);  
            }else if(modelType == 'Comment'){
                likabel = await this.commentRepository.get(modelId);
            }else{
                console.log("wrong model type");
            }
            const exists = await this.likeRepositort.finddByUserAndLikable({
                user:userId,
                onModel:modelType,
                likeable:modelId
            })
            if(exists){
                const deletedLikes = await this.likeRepositort.destroy(exists._id)
                likabel.likes.pull(exists.id);
                likabel.save();
                console.log(exists)
                
            }else{
                const newLike = await this.likeRepositort.create({
                    user:userId,
                    onModel:modelType,
                    likeable:modelId
                })
                likabel.likes.push(newLike);
                likabel.save();

            }
        } catch (error) {
           
        }
    }
    
}

export default LikeService;