import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required:true
    },
    likes : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ],
    numberOfRetweets : {
        type : Number
    },
    comments : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comments'
        }
    ]
});

const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;