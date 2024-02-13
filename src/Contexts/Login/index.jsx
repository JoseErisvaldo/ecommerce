// AuthProvider.js

import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email) => {
    try {
      const resUser = {
        email: email,
      };
  
      setUser(resUser);
  
      // Carrega os dados do usuário do banco de dados após o login
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", resUser.email);
  
      if (error) {
        console.error("Error loading user data:", error);
      } else if (data && data.length > 0) {
        setUserData(data[0]?.admin);
        console.log(data[0]?.admin);
      } else {
        console.warn("User not found in the database.");
      }
  
      localStorage.setItem("user", JSON.stringify(resUser));
      localStorage.setItem('admin', JSON.stringify(data[0]?.admin))
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setUserData(null); 
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ autenticado: !!user, user, userData, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
