import './style.css'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Header'
import { Link } from 'react-router-dom'
import BtnArrow from '../../Btn/BtnArrow'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ListCategory from '../../ListCategory'
import FilterStock from '../../FilterStock'
import { AuthContext } from '../../../Contexts/Login'
import supabaseClient from '../../../supabaseClient'

export default function ManageAd () {
  const {user} = useContext(AuthContext)
  const [sellers, setSellers] = useState([])
  const [stock, setStock] = useState([])
  const [listStock, setListStock] = useState([])

  async function loadingUser () {
    try {
      if(user) {
        const {data, erro} = await supabaseClient
        .from('sellers')
        .select('*')
        .eq('email', user.email)
        setSellers(data)

      }
    } catch (error) {
      console.log(`Erro na requisição, users ${error}`)   
    }
  }
  async function loadingStock () {
    try {
      if(sellers) {
        const {data, erro} = await supabaseClient
        .from('products')
        .select('*')
        setStock(data)

      }
    } catch (error) {
      console.log(`Erro na requisição, stock ${error}`)      
    }
  } 
  
  useEffect(() => {
    const mapStock = stock.map((stockItem) => {
      const filter = sellers.filter((userId) => userId.id === stockItem.idseller);
      return { ...stockItem, user: filter };
    });
    
    const resFilter = mapStock.filter(item => item.user != '')
    setListStock(resFilter)
  }, [stock,sellers])

  useEffect(() => {
    loadingUser () 
    loadingStock ()
   
  },[user])

  return(
    <div>
      <Header />
      <Link to={'/homeseller'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>

      <h1>Gerenciar Anúncios</h1>

      <div className='container-stock'>
        <ListCategory className='container-category' />
        <div className='card-stock'>
          <FilterStock/>
          <div className='container-card-stock'>
            <div className='dados-stock'>
              <table className='stock-table'>
                <thead>
                  <tr>
                    <th>Sku</th>
                    <th>Categoria</th>
                    <th>Foto</th>
                    <th>Descricão</th>
                    <th>Tamanho</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Bloqueado</th>
                    <th>Tipo de bloqueio</th>
                    <th>Origem</th>
                    <th>Anuncio</th>
                  </tr>
                </thead>
                <tbody>
                  {listStock.map((item) => (
                    <tr key={item.sku} >
                     <td>{item.sku}</td>
                      <td className='img-manage'>
                        <img src={item.photo}/>
                      </td>
                     <td>{item.description}</td>
                     <td>{item.category}</td>
                     <td>{item.dataAddrow}</td>
                     <td>{item.price}</td>
    
                     <td>{item.size}</td>
                     <td>{item.status}</td>
                     <td>{item.barCode}</td>
                   </tr>
                  ))}
                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}