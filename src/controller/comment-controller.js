import CommentService from "../service/comment-service.js";
import LikeService from "../service/like-service.js";


const commentService = new CommentService();

export const createComment = async (req,res) => {
    try {
        const data = req.body;
        const response = await commentService.createComment(data);
        return res.status(201).json({
            success:true,
            message:'succefully create the comment',
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