import CommentsRepository from "../repository/comment-repository.js";
import TweetRepository from "../repository/tweet-repository.js";


class CommentService {
    constructor(){
        this.commentRepository = new CommentsRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(data){
        const modelType = data.onModel;
        console.log(data)
        let commentable;
        if(modelType == 'Tweet'){
            commentable = await this.tweetRepository.get(data.commentable);
        }else if(modelType == 'Comment'){
            commentable = await this.commentRepository.get(data.commentable);
        }
        try {
            const comment = await this.commentRepository.create(data);
            commentable.comments.push(comment);
            await commentable.save();
            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
}

export default CommentService;