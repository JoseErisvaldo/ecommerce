import { Link } from 'react-router-dom'
import BtnArrow from '../Btn/BtnArrow'
import './style.css'
import { FaArrowCircleRight } from 'react-icons/fa'
import supabase from '../../supabaseClient'
import { useEffect, useState } from 'react'
export default function CategoryHome({ title, evento, link }) {
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

  const originlockRoupas = listItems.filter(item => {
    return item.blocked != true && item.category === 'Roupas'
  })
  const originlockRoupasSlice = listItems
    .filter(item => {
      return item.blocked != true && item.category === 'Roupas'
    })
    .slice(0, 4)
  const countoriginlockRoupas = originlockRoupas.length

  const originlockSapatos = listItems.filter(item => {
    return item.blocked != true && item.category === 'Sapatos'
  })
  const originlockSapatosSlice = listItems
    .filter(item => {
      return item.blocked != true && item.category === 'Sapatos'
    })
    .slice(0, 4)
  const countoriginlockSapatos = originlockSapatos.length

  const originlockBermudas = listItems.filter(item => {
    return item.blocked != true && item.category === 'Bermudas'
  })
  const originlockBermudasSlice = listItems
    .filter(item => {
      return item.blocked != true && item.category === 'Bermudas'
    })
    .slice(0, 4)
  const countoriginlockBermudas = originlockBermudas.length

  const originlockAcessorios = listItems.filter(item => {
    return item.blocked != true && item.category === 'Acessorios'
  })
  const originlockAcessoriosSlice = listItems
    .filter(item => {
      return item.blocked != true && item.category === 'Bermudas'
    })
    .slice(0, 4)
  const countoriginlockAcessorios = originlockAcessorios.length

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
      <div className="container-category-home">
        <div className="container-card-category-home">
          <div className="card-category-home">
            {originlockRoupasSlice.map(category => (
              <div className="category-img-home" key={category.sku}>
                <img src={category.photo} />
              </div>
            ))}
          </div>
          {originlockRoupas.slice(0, 1).map(category => (
            <div className="tittle-category-home" key={category.category}>
              <div className="name-category">{category.category}</div>
              <div className="category-count">{countoriginlockRoupas}</div>
            </div>
          ))}
        </div>
        <div className="container-card-category-home">
          <div className="card-category-home">
            {originlockSapatosSlice.map(category => (
              <div className="category-img-home" key={category.sku}>
                <img src={category.photo} />
              </div>
            ))}
          </div>
          {originlockSapatos.slice(0, 1).map(category => (
            <div className="tittle-category-home" key={category.category}>
              <div className="name-category">{category.category}</div>
              <div className="category-count">{countoriginlockSapatos}</div>
            </div>
          ))}
        </div>
        <div className="container-card-category-home">
          <div className="card-category-home">
            {originlockBermudasSlice.map(category => (
              <div className="category-img-home" key={category.sku}>
                <img src={category.photo} />
              </div>
            ))}
          </div>
          {originlockBermudas.slice(0, 1).map(category => (
            <div className="tittle-category-home" key={category.category}>
              <div className="name-category">{category.category}</div>
              <div className="category-count">{countoriginlockBermudas}</div>
            </div>
          ))}
        </div>
        <div className="container-card-category-home">
          <div className="card-category-home">
            {originlockAcessoriosSlice.map(category => (
              <div className="category-img-home" key={category.sku}>
                <img src={category.photo} />
              </div>
            ))}
          </div>
          {originlockAcessorios.slice(0, 1).map(category => (
            <div className="tittle-category-home" key={category.category}>
              <div className="name-category">{category.category}</div>
              <div className="category-count">{countoriginlockAcessorios}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
