import Like from "../models/likes.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }

    async finddByUserAndLikable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            throw error;
        }
    }
}

export default LikeRepository;