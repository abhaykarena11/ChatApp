import mongoose from "mongoose";
import User from "./User.model.js";

const messageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    receiver : {
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    message: {
        type:String ,
        required:true ,
        maxlength:1000 ,
        trim: true , 
        validate:[{
            validator: (value) => value.length > 0 , 
            message:"message can't be empty",
        }]

    },
    createAt :{ type : Date , default : Date.now },

}, {
    timestamps:true
});

const Message = mongoose.model("Message",messageSchema);

export default Message;