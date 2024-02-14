import './style.css'
import { IoIosMenu } from 'react-icons/io'
import { CiSettings } from 'react-icons/ci'
import { BsTicketPerforated } from 'react-icons/bs'
import NameUser from '../NameUser'
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../../Contexts/Login'
import supabaseClient from '../../supabaseClient'

export default function Header() {
  const {logout, user} = useContext(AuthContext)
  const [userBd, setUserBd] = useState([])
  const handelLogout = () => {
    logout()
  }

  async function loadingUser () {
    if(user) {
      const {data, errror} = await supabaseClient
    .from('users')
    .select('*')
    .eq('email' , user.email)
    setUserBd(data)
    }
    
  }

  useEffect(() => {
    loadingUser ()
  },[user])

  return (
    <div>
      <div className="card-profile">
        <div className="card-dados">
          <div className="card-img-profile">
            {userBd.map((photo) => (
              <img key={photo.id} src={photo.photo} />
            ))}
            
          </div>
          <button className="btn-card">Minhas Atividades</button>
          <button onClick={handelLogout} className="btn-card">Sair</button>
        </div>
        <div className="card-menu">
          <div>
            <BsTicketPerforated />
          </div>
          <div>
            <IoIosMenu />
          </div>
          <div>
            <CiSettings />
          </div>
        </div>
      </div>
      <NameUser />
    </div>
  )
}
