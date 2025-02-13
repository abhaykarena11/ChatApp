import Message from "./Message";
import useGetMessages from "../../context/useGetMessages";
import { useEffect, useRef, useState } from "react";
import useGetSocketMessage from "../../context/useGetSocketMessage";

export default function Messages() {
  const {messages} = useGetMessages();
  useGetSocketMessage();
  const lastMessageRef = useRef();

  const [isUserScrolling, setIsUserScrolling] = useState(false);

  // Detect user scrolling
  const handleScroll = () => {
    if (lastMessageRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = lastMessageRef.current;
      setIsUserScrolling(scrollTop + clientHeight < scrollHeight - 10); // 10px tolerance
    }
  };

  useEffect(() => {
    console.log(messages);
    if (!isUserScrolling && lastMessageRef.current) {
      // lastMessageRef.current.scrollIntoView({ behavior: "auto" }); 
      lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;
    }
  }, [messages,isUserScrolling]); // Trigger on `messages` array change.

  return (
    <div className="mt-2 ml-4 h-[calc(83vh-10vh)] overflow-auto scrollbar-hide"  ref={lastMessageRef} onScroll={handleScroll}>
        {
          messages && messages.length >0 ? 
          messages.map((msg)=>{
           return <div key={msg._id} >
               <Message  msg={msg}></Message>
            </div>
            
          }): <div className="flex justify-center items-center h-[calc(100vh-90px)]">send some msg</div>
        }
    </div>
  )
}
