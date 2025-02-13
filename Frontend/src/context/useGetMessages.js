import { useEffect, useState } from "react"
import useConversation from "../statemanage/useConversation";
import axios from "axios";

export default function useGetMessages() {

    const [loading,setLoading] = useState(false);
    const {messages , setMessages , selectedConversation} = useConversation();

    useEffect(()=>{
        if(selectedConversation && selectedConversation._id){
            const getMessages = async () => {
                setLoading(true);
    
                try {
                    const response = await axios.get(`https://chat-app-temp.vercel.app/message/get/${selectedConversation._id}`, {
                        withCredentials: true, // Ensures cookies are sent
                    });                   
                    setMessages(response.data.messages);
                } catch (error) {
                    console.log("error in fetch message");
                    console.log(error);
                }
            }
            getMessages();
        }
        
    },[selectedConversation,setMessages,messages]);

    useEffect(() => {
    }, [selectedConversation,setMessages]);
  return (
    {messages , loading}
  )
}
