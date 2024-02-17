import { useParams } from "react-router-dom"
import Header from "../../Components/Header"
import BtnArrow from "../../Components/Btn/BtnArrow"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import RouterLink from "../../Components/Btn/Link";
import './style.css'
import supabaseClient from "../../supabaseClient";
import { useEffect, useState } from "react";
import { SiGooglemaps } from "react-icons/si";
import BtnCep from "../../Components/Btn/BtnCep";
import BtnCart from "../../Components/Btn/BtnCart";
import BtnFavorite from "../../Components/Btn/Favorite";
import Star from "../../Components/Reviews/Star";
import IconStar from "../../Components/Reviews/Icons/Star";
import { GrFormSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";


export default function Products () {
  const {idParams} = useParams()
  const [product, setProduct] = useState([])
  const [size, setSize] = useState(null)
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [qtd, setQtd] = useState(1)

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


  function increment() {
    const one = 1
    setQtd( qtd + one)
  }

  function decrement() {
    const one = 1
    if(qtd >1 ) {
      setQtd( qtd - one)
    }
    
  }

  const mapPhoto = product.map(item => {
    return item.photo
  })
  const mapPrice = product.map(item => {
    return item.price
  })

  const resCart = {
    sku: idParams,
    size: size,
    photo: mapPhoto[0],
    price: Number(mapPrice[0]),
    qtd: qtd
  };
  
  function handleCart() {
    const getLocal = localStorage.getItem('@cartLojaMais');
    let resLocal = JSON.parse(getLocal);
    if (!Array.isArray(resLocal)) {
      resLocal = [];
    }
    const hasRes = resLocal.some((item) => item.sku === resCart.sku)
    if(hasRes) {
      return alert('Item ja adicionado !')
    }
    resLocal.push(resCart);
    localStorage.setItem('@cartLojaMais', JSON.stringify(resLocal));
  }
  
 
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
              <div className="header-cart">
                <div className="card-star">
                  <div><Star starone={<IconStar/>}/></div>
                  <div><Star starone={<IconStar/>}/></div>
                  <div className="card-to-assess">Avaliar</div>
                </div>
                <div><BtnFavorite/></div>
              </div>
              <div className="products-vendido">Vendido por <span style={{ color: 'red' }}> JS Modas </span> </div>
              <div className="products-entregue">Entregue por <span style={{ color: 'blue' }}> Loja Mais </span> </div>
              <div className="products-description">{item.description}</div>
              <div className="price-cart">
                <span className="products-price-descount">R$ {item.price}</span>
                <span className="products-price">R$ {item.price} no PIX</span>
                <span className="products-price-parcelado">Ou 10x de R$ {item.price / 12} sem juros </span>
              </div>
              <div className="products-cep">
                <input placeholder="Digite seu CEP" type="number" name="cep" id="cep" />
                <div className="icon-cep"><SiGooglemaps /></div>
               <BtnCep dados={'Buscar'}/>
              </div>
              <div>
                <div className="products-type">Frete: R$: 12,99 - Sedex</div>
                <div className="products-type">Frete: R$: 19,99 - Sedex-Express</div>
              </div>
              
              <div className="products-cart">
                <div>
                  <select onChange={e => setSize(e.target.value)} className="select-size-cart">
                    <option value={'-'}>Selecioanar Tamanho</option>
                    <option value={'P'}>P</option>
                    <option value={'PP'}>PP</option>
                    <option value={'M'}>M</option>
                    <option value={'G'}>G</option>
                  </select>
                </div>
                <div className="qtd-order">
                  <div onClick={decrement} className="decrement-cart"><GrFormSubtract /></div>
                  <div  className="res-cart">{qtd}</div>
                  <div onClick={increment} className="increment-cart"><GrAdd /></div>
                  <button onClick={handleCart} className="btn-cart">Adicionar</button>
                </div> 
              </div>
              
              {/*<div className="products-assessments">Avaliações</div>
              <div className="products-comment">Comentarios</div>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}