import './style.css'
import { FaArrowCircleRight } from 'react-icons/fa'

import NameUser from '../NameUser'
import BtnArrow from '../Btn/BtnArrow'

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
        <BtnArrow dados={<FaArrowCircleRight />} />
      </div>
    </div>
  )
}
