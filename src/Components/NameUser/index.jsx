import './style.css'
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../Contexts/Login'
import supabase from '../../supabaseClient'
export default function NameUser() {
  const {user} = useContext(AuthContext)
  const [userBd, setUserBd] =useState([])
  async function loadingUser () {
    const {data, error} = await supabase
    .from('users')
    .select('*')
    setUserBd(data)
  } 
  useEffect(() => {
    loadingUser()
  },[])

  const resFilter = userBd.find(item => item.email === user.email)

  return (
    <div className="card-name-user">
      <h1>Olá,  {resFilter ? resFilter.nameUser : 'User Desconhecido !!' }</h1>
    </div>
  )
}
