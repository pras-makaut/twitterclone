import Comments from "../models/comments.js";
import CrudRepository from "./crud-repository.js";

class CommentsRepository extends CrudRepository{
    constructor(){
        super(Comments)
    }
}

export default CommentsRepository;