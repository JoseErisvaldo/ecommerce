import './style.css'
import { FaArrowCircleRight } from 'react-icons/fa'

import NameUser from '../NameUser'
import BtnArrow from '../Btn/BtnArrow'
import { Link } from 'react-router-dom'

export default function Announcement({ tittle, descripton, link }) {
  return (
    <div className="card-announcement">
      <div className="announcement">
        <h3>{tittle}</h3>
      </div>
      <div className="dados-announcement">
        <div className="description-announcement">{descripton}</div>
        <Link to={link}>
          <BtnArrow dados={<FaArrowCircleRight />} />
        </Link>
      </div>
    </div>
  )
}
