// AuthProvider.js

import React, { createContext, useEffect, useState } from "react";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import supabase from "../../supabaseClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userSeller, setSeller] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user")
    const recoveredAdmin = localStorage.getItem("admin");


    if (recoveredUser && recoveredAdmin) {
      setUser(JSON.parse(recoveredUser));
      setUserData(JSON.parse(recoveredAdmin))
    }

    setLoading(false);
  }, []);

  const login = async (email) => {
    try {
      const resUser = {
        email: email,
      };
  
      setUser(resUser);
  
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", resUser.email);
  
        setUserData(data[0]?.admin);
        setSeller(data[0]?.seller)
  
      localStorage.setItem("user", JSON.stringify(resUser));
      localStorage.setItem('admin', JSON.stringify(data[0]?.admin))
      navigate("/")
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setUserData(null); 
    localStorage.removeItem("user");
    localStorage.removeItem("admin")
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ autenticado: !!user, user, userData, login, loading, logout, userSeller }}
    >
      {children}
    </AuthContext.Provider>
  );
};
