import './style.css'
import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import BtnArrow from '../Btn/BtnArrow'
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function ListCategory () {
  return(
    <div className='container-category'>
      <h4>Selecionar Gêneros</h4>
      <ul className='genero-category'>
        <li className='genero-category'>
            Todos
        </li>
        <li>
          Masculino
        </li>
        <li className='genero-category'>
          Feminino
        </li>
      </ul>
      <h4>Selecionar Categorias</h4>
      <ul className='list-category'>
        <li>
          Todos
        </li>
        <li>
          Sapatos
        </li>
        <li>
          Roupas
        </li>
        <li>
          Sapatos
        </li>
        <li>
          Sapatos
        </li>
        <li>
          Sapatos
        </li>
        <li>
          Sapatos
        </li>
      </ul>
      <ul className='genero-category'>
        <li className='genero-category'>
            Todos
        </li>
        <li>
          Masculino
        </li>
        <li className='genero-category'>
          Feminino
        </li>
      </ul>
    </div>
  )
}