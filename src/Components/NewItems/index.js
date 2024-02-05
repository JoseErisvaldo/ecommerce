import { Link } from 'react-router-dom'
import BtnArrow from '../Btn/BtnArrow'
import './style.css'
import { FaArrowCircleRight } from 'react-icons/fa'
import supabase from '../../supabaseClient'
import { useEffect, useState } from 'react'
export default function NewItems({ title, evento, link }) {
  const [listItems, setitems] = useState([])
  async function loadingItems() {
    try {
      const { data, error } = await supabase.from('products').select('*')
      setitems(data)
      console.log(data)
    } catch (error) {
      console.log('Erro' + error)
    }
  }
  useEffect(() => {
    loadingItems()
  }, [])
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
        {listItems.map(item => (
          <div className="card-items" key={item.sku}>
            <div className="card-item-img">
              <img src={item.photo} alt="imagem" />
            </div>
            <div className="description-item">{item.description}</div>
            <div>R$ {item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
