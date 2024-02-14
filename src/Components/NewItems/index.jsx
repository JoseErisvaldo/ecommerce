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
      const { data, error } = await supabase.from('stock').select('*')
      setitems(data)
    } catch (error) {
      console.log('Erro' + error)
    }
  }
  useEffect(() => {
    loadingItems()
  }, [])
  const originlock = listItems.filter(item => item.blocked != true)
  /// Tenho que adiconar um limite de exibição  e tenho que exibir novo, com base na data da criação !!!!

  return (
    <div>
      <Link  className='link' to={link}>
        <div className="title-card">
          <h3>{title}</h3>
          <div className="see-all">
            <div>{evento}</div>
            <BtnArrow dados={<FaArrowCircleRight />} />
          </div>
        </div>
      </Link>
      <div className="container-items">
        {originlock.map(item => (
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
