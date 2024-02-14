import './style.css'
import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import BtnArrow from '../Btn/BtnArrow'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ListCategory from '../ListCategory'
import FilterStock from '../FilterStock'

export default function Stock () {
  return(
    <div>
      <Header />
      <Link to={'/homeseller'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>

      <h1>Gerenciar Estoque</h1>

      <div className='container-stock'>
        <ListCategory/>
        <div className='card-stock'>
          <FilterStock/>
          <div className='container-card-stock'>
            <div className='dados-stock'>
              dasdsdsadsad
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}