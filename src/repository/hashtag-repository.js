import Hashtag from "../models/hashtags.js";

class HashtagRepository {
    async create(data){
        try {
            let hashtag = await Hashtag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
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
    async getHashtagById(id){
        try {
            let hashtag = await Hashtag.findById(id);
            return hashtag;
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
    async deleteHashtagById(id){
        try {
            let hashtag = await Hashtag.deleteOne(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;