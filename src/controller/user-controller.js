
import UserService from "../service/user-service.js";

const userService = new UserService();

export const signUp = async (req,res) => {
    try {
        const data = req.body;
        const response = await userService.signUp(data);
        return res.status(201).json({
            success:true,
            message:'succefully create a user',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error Encountered created a user',
            data:{},
            err:error
        })
    }
}

export const signIn = async (req,res) => {
    try {
        const data = req.body;
        const response = await userService.singIn(data);
        return res.status(201).json({
            success:true,
            message:'succefully Signed in  user',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Error Encountered in sign in a user',
            data:{},
            err:error
        })
    }
}
