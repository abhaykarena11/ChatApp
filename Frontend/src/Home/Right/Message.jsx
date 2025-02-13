import useConversation from "../../statemanage/useConversation";

export default function Message({msg}) {
  const {selectedConversation} = useConversation();
  const side = selectedConversation._id === msg.receiver ? "chat-end":"chat-start";
  const msg_bg_color = selectedConversation._id === msg.receiver ? "chat-bubble-info":"chat-bubble-accent";

  return (
    <div>
      <div className={`chat ${side}`}>
        <div className={`chat-bubble ${msg_bg_color}`}>{msg.message}</div>
      </div>
    </div>
  );
}
