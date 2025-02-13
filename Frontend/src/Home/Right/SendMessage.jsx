import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useConversation from "../../statemanage/useConversation";

export default  function SendMessage() {
  const {selectedConversation} = useConversation();
  const [message , setMessage] = useState("");

  async function sendmsgHandler (e) {
    e.preventDefault();

    try {
      const response = await fetch(`https://chat-app-y61w.vercel.app/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: "include",
        body: JSON.stringify({message}) // Ensure the body is a string
    });
    setMessage("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={sendmsgHandler} className="ml-4 pt-2 h-[9vh] flex space-x-3 items-center justify-center">
      <div className="w-[93%]">
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full" 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
      </div>
      <button type="submit" className="hover:bg-gray-700 hover:rounded-lg duration-300 w-11 h-11" >
        <IoIosSend className="text-2xl flex items-center cursor-pointer mx-auto" />
      </button>
    </form>
  );
}
