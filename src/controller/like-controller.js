import LikeService from "../service/like-service.js";


const likeService = new LikeService();

export const togglingLike = async (req,res) => {
    try {
        const data = req.body;
        const response = await likeService.togglingLike(data);
        return res.status(201).json({
            success:true,
            message:'succefully toggle the like',
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