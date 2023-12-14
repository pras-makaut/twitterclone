import Hashtag from "../models/hashtags.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository {
    constructor(){
        super(Hashtag);
    }
    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getHashtagByName(text){
        try {
            let hashtags = await Hashtag.find({text:text});
            return hashtags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;