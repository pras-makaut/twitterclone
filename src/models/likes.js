import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum : ["Tweet" , "Comment"]
    },
    likeable : {
        type:mongoose.Schema.ObjectId,
        required:true,
        refPath:'onModel'
    }
});