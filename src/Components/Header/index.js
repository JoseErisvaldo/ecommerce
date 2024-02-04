import './style.css'
import { IoIosMenu } from 'react-icons/io'
import { CiSettings } from 'react-icons/ci'
import { BsTicketPerforated } from 'react-icons/bs'
import NameUser from '../NameUser'

export default function Header() {
  return (
    <div>
      <div className="card-profile">
        <div className="card-dados">
          <div className="card-img-profile">
            <img src="i" />
          </div>
          <button className="btn-card">Minhas Atividades</button>
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
