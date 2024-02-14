import './style.css'
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../Contexts/Login'
import supabase from '../../supabaseClient'
export default function NameUser() {
  const {user, userData} = useContext(AuthContext)
  const [userBd, setUserBd] =useState([])

  console.log(userData)

  
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
      {String(userData)}
      <h1>Olá,  {resFilter ? resFilter.nameUser : '' }</h1>
    </div>
  )
}
