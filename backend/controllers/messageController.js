import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async(req,res)=>{
    try {
        const senderId = req.userId;
        const receiverId = req.params.id;
        const {message} = req.body;
        let gotConversation = await Conversation.findOne({
            participants:{$all : [senderId,receiverId]}, 
        })
        // check previous conversation present between this partiipants or not
        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants : [senderId,receiverId]
            })
        }
        // msg crete and store in msg model
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        // and also push in conversation model
        if(newMessage){
            gotConversation.messages.push(newMessage._id);
        }
        await gotConversation.save();
        return res.status(200).json({
            message:"message send successfull",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}

// receive message
export const getMessage = async(req,res) =>{
    try {
        const receiverId = req.params.id;
        const senderId = req.userId;
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,receiverId]}
        }).populate("messages");
        return res.status(200).json({
            message : "message retrive succcessfully.",
            conversation
        })
    } catch (error) {
        console.log(error);
    }
}