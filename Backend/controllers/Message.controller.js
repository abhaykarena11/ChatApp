import Conversation from "../models/Conversation.model.js";
import Message from "../models/Message.model.js";
import { getSocketId } from "../socketIO/Server.js";

export const sendMessage = async (req,res) =>{

    try {
        const message = req.body.message;
        const receiverId = req.params.id;
        const senderId = req.user[0]._id?.toString();
        console.log(senderId);

        let conversation = await Conversation.findOne({
            participants : {$all: [senderId,receiverId]}
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId , receiverId],
            });
        }

        const newMessage = new Message({
           sender: senderId ,
           receiver: receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
            
        await Promise.all([conversation.save(), newMessage.save()]);
        const receiverSocketId = getSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",message);
        }
        return res.status(200).json({message:"Message sent successfully !"})
        

    } catch (error) {
        console.log(error+"error in sending message");
        return res.status(400).json({message:"message not sending"});
    }

}

export const getMessage = async (req,res) =>{
    try {
        const chatUser = req.params.id;
        
        const senderId = req.user[0]._id?.toString();
        

        let conversation = await Conversation.findOne({
            participants: {$all :[senderId , chatUser]},
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);

        }

        // const messages = conversation.messages;
        res.status(200).json(conversation);

    } catch (error) {
        console.log(error+"error in fatching chat of user");
        return res.status(400).json({error:"server error to fetch data"});
    }
}