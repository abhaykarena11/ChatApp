import Search from "./Search";
import Users from "./Users";


export default function Left() {
  return (
    <>
    <div className="w-[30%] bg-black text-white">
      <h1 className="text-3xl font-bold p-5">Chats</h1>
    <Search/>
    <hr className="my-4"/>
    <Users></Users>
    </div>  
    </>
    
  )
}
