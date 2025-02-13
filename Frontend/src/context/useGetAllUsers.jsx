import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

export default function useGetAllUsers (){
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("token");

                if(token){
                    const response = await axios.get("https://chat-app-temp.vercel.app/user/getAllUsers",{
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${token}`, // Replace YOUR_ACCESS_TOKEN with the actual token
                        },
                    });
                    setAllUsers(response.data.allUsers);
                }
            } catch (error) {
                console.error("Error fetching users: " + error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        
    }, [allUsers]);

    return [ allUsers, loading ];
};
