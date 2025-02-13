import ChatUser from "./ChatUser";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import useConversation from "../../statemanage/useConversation";

export default function Right() {
  const {selectedConversation} = useConversation();
  return (
    selectedConversation ?  <div className="w-[67%] border bg-slate-900 text-white border-black">
        <ChatUser user={selectedConversation}></ChatUser>
        <Messages></Messages>
        <SendMessage></SendMessage>
    </div> : <div className="w-[67%] border bg-slate-900 text-white border-black flex justify-center items-center h-screen"> select the user </div>
  )
}
