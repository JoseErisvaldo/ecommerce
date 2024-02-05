import './style.css'
import { FaArrowCircleRight } from 'react-icons/fa'

import NameUser from '../NameUser'
import BtnArrow from '../Btn/BtnArrow'
import { Link } from 'react-router-dom'

export default function Announcement() {
  return (
    <div className="card-announcement">
      <div className="announcement">
        <h3>Anunciar</h3>
      </div>
      <div className="dados-announcement">
        <div className="description-announcement">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          hendrerit luctus libero ac vulputate.
        </div>
        <Link to={'/announce'}>
          <BtnArrow dados={<FaArrowCircleRight />} />
        </Link>
      </div>
    </div>
  )
}
