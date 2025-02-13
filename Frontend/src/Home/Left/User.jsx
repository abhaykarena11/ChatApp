import useConversation from "../../statemanage/useConversation";



function User({user , isOnline}){
  const {_id , name , email} = user;
  function onClickHandler(){
    setSelectedConversation(user);
  }
  const {selectedConversation,setSelectedConversation} = useConversation();
  const selected = selectedConversation === _id ? "bg-slate-800" : "";

    return(
        <div className={`${selected} hover:bg-slate-800 duration-300 cursor-pointer px-6 py-3 flex gap-4`} onClick={onClickHandler}>
            <div className={`avatar ${isOnline ? "online" : ""}`}>
              <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">{name}</p>
                <p className="text-xs">{email}</p>
              </div>
        </div>
    )
    }
    
    export default User;