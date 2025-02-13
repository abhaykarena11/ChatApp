import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const SecureRoute = async ( req , res , next ) =>{

    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(400).json({
                success:false,
                message:"unAuthorized user from SecureRoute"
            })
        }

        const verified = jwt.verify(token,process.env.JWT_TOKEN);
        if(!verified){
            return res.status(400).json({
                success:false,
                message:"Invalid token from SecureRoute"
            })
        }

        const user = await User.find({_id:verified.userId}).select("-password");
        
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found from SecureRoute"
            })
        }

        req.user=user;
        next();
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"server error from SecureRoute"
        })
    }
} 