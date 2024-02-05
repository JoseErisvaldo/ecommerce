import { Link } from 'react-router-dom'
import BtnArrow from '../Btn/BtnArrow'
import './style.css'
import { FaArrowCircleRight } from 'react-icons/fa'

export default function NewItems({ title, evento, link }) {
  return (
    <div>
      <Link to={link}>
        <div className="title-card">
          <h3>{title}</h3>
          <div className="see-all">
            <div>{evento}</div>
            <BtnArrow dados={<FaArrowCircleRight />} />
          </div>
        </div>
      </Link>
      <div id="container-items">
        <div className="card-items">
          <div className="card-item-img">
            <img src="ads" alt="imagem" />
          </div>
          <div className="description-item">
            Nameaaaasssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaassssssssssssssss
          </div>
          <div>R$ 70,00</div>
        </div>
        <div className="card-items">
          <div className="card-item-img">
            <img src="ads" alt="imagem" />
          </div>
          <div className="description-item">
            Nameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssss
          </div>
          <div>R$ 70,00</div>
        </div>
        <div className="card-items">
          <div className="card-item-img">
            <img src="ads" alt="imagem" />
          </div>
          <div className="description-item">
            Nameaaaaaaaaaaaaaassssssssssssssss
          </div>
          <div>R$ 70,00</div>
        </div>
        <div className="card-items">
          <div className="card-item-img">
            <img src="ads" alt="imagem" />
          </div>
          <div className="description-item">
            Nameaaaaaaaaaaaaaassssssssssssssss
          </div>
          <div>R$ 70,00</div>
        </div>
        <div className="card-items">
          <div className="card-item-img">
            <img src="ads" alt="imagem" />
          </div>
          <div className="description-item">
            Nameaaaaaaaaaaaaaassssssssssssssss
          </div>
          <div>R$ 70,00</div>
        </div>
      </div>
    </div>
  )
}
