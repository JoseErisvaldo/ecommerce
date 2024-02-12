import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if(recoveredUser) {
      setUsers(JSON.parse(recoveredUser))
    }

    setLoading(false)
  },[])


  const login  = (email, password) => {
    const resUser = {
      id: 1,
      email: email
    }

    localStorage.setItem('user',JSON.stringify(resUser))

    if(password === '123')
    setUsers(resUser)
    navigate('/')
  }

  const logout = () => {
    setUsers(null)
    localStorage.removeItem('user')
    navigate('/login')
  }
  return(
    <AuthContext.Provider value={{ autenticado: !!user, login, loading, logout}}>
      {children}
    </AuthContext.Provider>
  )
}