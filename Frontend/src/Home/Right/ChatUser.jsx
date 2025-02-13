import useConversation from "../../statemanage/useConversation";
import { useSocketContext } from "../../context/SocketContext";

export default function ChatUser({user}) {

  const { socket, onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const {selectedConversation} = useConversation();
  return (
    <div className="pt-4 pl-4 pb-3 flex space-x-4 bg-slate-850 hover:bg-slate-800 duration-300 cursor-pointer ">
        <div className={`avatar ${isOnline ? "online":""}`}>
          <div className="w-[9vh] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div>
            <h1 className="text-base font-bold">{selectedConversation.name}</h1>
            <span className="text-sm">{`${isOnline ? "online" : "last seen recently"}`}</span>
        </div>
    </div> 
  );
}
