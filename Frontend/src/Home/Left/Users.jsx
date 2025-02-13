import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import useSearch from "../../statemanage/useSearch";

import { useSocketContext } from "../../context/SocketContext";

function Users() {
    const [allUsers, loading] = useGetAllUsers();
    const {searchText} = useSearch();
    const {onlineUsers} = useSocketContext();

    const filteredUsers = allUsers.filter(user => 
        user.name.toLowerCase().includes(searchText.toLowerCase()) || 
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );

    return (

        <div className="overflow-auto h-[74vh] scrollbar-hide">
            {
                filteredUsers.map((user)=>{
                   return onlineUsers.includes(user._id) && <User key={user._id} user={user} isOnline={true}></User>
                })
            }
            {
                filteredUsers.map((user)=>{
                   return !(onlineUsers.includes(user._id)) && <User key={user._id} user={user} isOnline={false}></User>
                })
            }
        </div>
    )
}

export default Users;