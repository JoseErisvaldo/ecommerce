import { useParams } from "react-router-dom"
import Header from "../../Components/Header"
import BtnArrow from "../../Components/Btn/BtnArrow"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import RouterLink from "../../Components/Btn/Link";
import './style.css'
import supabaseClient from "../../supabaseClient";
import { useEffect, useState } from "react";
import { SiGooglemaps } from "react-icons/si";
import BtnCep from "../../Components/Btn/BtnArrow";


export default function Products () {
  const {idParams} = useParams()
  const [product, setProduct] = useState([])

  const fetchStock = () => {
    return new Promise((resolve, reject) => {
      supabaseClient
      .from('stock')
      .select('*')
      .eq('sku', idParams)
      .then((data, error) => {
        if(error) {
          console.log(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  useEffect(() => {
    Promise.all([fetchStock()])
    .then(([StockData]) => {
      setProduct(StockData.data)
    })
    .catch((error) => {
      console.error('Erro ao buscar dados:', error);
    })
  },[idParams])

  return(
    <div>
      <Header/>
     
      <RouterLink to={'/homeclient'} dados={ <BtnArrow dados={<FaArrowAltCircleLeft/>} />  } ></RouterLink>
      <h5>Voce está em:</h5>
      <h2>{product.map((des) => (
        <>{des.description}</>
      ))}</h2>
      
      <div className="container-products">
        {product.map((item) => (
          <div className="card-product">
            <div className="car-product-img">
              <div className="products-img-left">Imagem-pequenas</div>
              <div className="products-img-center"><img src={item.photo} /></div>
            </div>
            <div className="card-dados-product">
              <div className="products--description">Vendido por:JS Modas</div>
              <div className="products--description">Entregue por: Loja Mais</div>
              <div className="products--description">Descrição{item.description}</div>
              <div className="products-price">Preço: {item.price}</div>
              <div className="products-cep">
                <input placeholder="Digite seu CEP" type="number" name="cep" id="cep" />
                <div className="icon-cep"><SiGooglemaps /></div>
               <BtnCep dados={'Buscar'}/>
              </div>
              <div className="products-cart">Add ao carinho</div>
              <div className="products-type">Tipo de entrega</div>
              <div className="products-assessments">Avaliações</div>
              <div className="products-comment">Comentarios</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}