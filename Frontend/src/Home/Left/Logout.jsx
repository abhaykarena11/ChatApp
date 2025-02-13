import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const token = Cookies.get("token");
      if(token){
        const response = await axios.get("http://localhost:5000/user/logout",{
          withCredentials: true,
          headers: {
              Authorization: `Bearer ${token}`, // Replace YOUR_ACCESS_TOKEN with the actual token
          },
      });
      navigate("/login");
      }
      
      
    } catch (error) {
      console.log("error during log out"+error);
    }
  }
  return (
    <div className="w-[4%] bg-slate-900 text-white flex flex-col justify-end" >
        <div className="hover:bg-gray-700 hover:rounded-lg duration-300 w-7 h-7 flex items-center cursor-pointer mx-auto mb-3">
          <CiLogout className="mx-auto" onClick={logOut}/>
        </div>
    </div>
  )
}
