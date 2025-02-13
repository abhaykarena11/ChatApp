import { useEffect } from "react"
import Left from "./Home/Left/Left"
import Logout from "./Home/Left/Logout"
import Right from "./Home/Right/Right"
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(()=>{
   
                try {
                    const token = Cookies.get("token");
                    if(!token){
                      navigate("/login");
                      return;
                    }
                } catch (error) {
                    console.error("Error fetching users: " + error);
                }
  },[]);
  return (
    <>
    <div className="flex h-screen">
      <Logout></Logout>
      <Left></Left>
      <Right></Right>
    </div>
    </>
    
  )
}
