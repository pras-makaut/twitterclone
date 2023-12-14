import UserRepository from "../repository/user-repository.js";



class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signUp(data){
        try {
            const user = this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async singIn(data){
        try {
            const user = await this.userRepository.getUserByEmail(data.email);
        
            if(!user){
                throw {
                    message:'No user found'
                }
            }
            if(!user[0].comparePassword(data.password)){
                throw {
                    message:'Password does not match please enter the right password'
                }
            }
            return {
                message:'User signed in'
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
}

export default UserService;