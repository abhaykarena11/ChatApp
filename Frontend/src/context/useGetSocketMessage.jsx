import { useEffect } from "react";
import useConversation from "../statemanage/useConversation";
import { useSocketContext } from "./SocketContext"

export default function useGetSocketMessage() {
    const {socket} = useSocketContext();
    const {messages , setMessages}= useConversation();

    useEffect(()=>{
        socket.on("newMessage",(message)=>{
            setMessages((prev)=> [...prev , message])
        });
        return ()=> socket.off("newMessage");
    },[socket , messages , setMessages]);   
}
