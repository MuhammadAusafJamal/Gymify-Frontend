import axios from 'axios';
import React, {Children, createContext, useContext, useState, useEffect} from 'react'
import { BASE_URL } from "../api";
import { useNavigate } from 'react-router-dom';


const authContext = createContext();

export default function ContextProvider({children}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
    }

    useEffect(() => {
      const verifyUser = async () => {
        try{
          const res = await axios.get(`${BASE_URL}verify`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          if(res.data.success){
            setUser(res.data.user);
          }else{
            setUser(null);
          }
        }catch(error){
          console.log(error);
        }
      }
      verifyUser()
    }, [])
    
  return (
  <authContext.Provider value={{user, login, logout}}>
    {children}
  </authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext);