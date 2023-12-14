
import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
    async getUserByEmail(email){
        try {
            const user = await User.find({email:email});
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserRepository;