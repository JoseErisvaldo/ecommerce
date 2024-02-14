import { MdArrowForwardIos } from "react-icons/md";
import './style.css'
export default function FilterStock () {
  return(
    <div className='title-filter-stock'> 
      <span className='genero-stock'>
        Gêneros: Todos 
      </span>
      <span className='category-stock'>
        <MdArrowForwardIos />
        Categorias: Todos</span>
      <span className='size-stock'>
        <MdArrowForwardIos />
        Tamanhos: Todos</span>
    </div>
  )
}