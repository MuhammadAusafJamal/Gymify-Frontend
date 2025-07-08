import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BASE_URL } from "../api"; // Make sure BASE_URL ends with `/`
import { useNavigate } from 'react-router-dom';

const authContext = createContext();
export const useAuth = () => useContext(authContext);

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    localStorage.clear(); // ⚠️ Removes all keys!
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get(`${BASE_URL}verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(res)

        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth verify error", err);
        setUser(null);
      }
    };

    verifyUser();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

