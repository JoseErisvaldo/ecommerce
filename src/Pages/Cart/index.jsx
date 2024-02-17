// src/Cart.js
import React, { useEffect, useState } from 'react';
import './App.css';
import RouterLink from "../../Components/Btn/Link";
import BtnArrow from '../../Components/Btn/BtnArrow';
import Header from '../../Components/Header';
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Cart() {
  const [cep, setCep] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [deliveryType, setDeliveryType] = useState('Sedex');
  const [localS, setLocalS] = useState([])
  const local = localStorage.getItem('@cartLojaMais')

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleReceiverNameChange = (e) => {
    setReceiverName(e.target.value);
  };

  const handleDeliveryTypeChange = (e) => {
    setDeliveryType(e.target.value);
  };

  useEffect(() => {
    const parsedLocalCart = JSON.parse(localStorage.getItem('@cartLojaMais'));
    setLocalS(parsedLocalCart);
  }, [local]);
  
  const sumLocal = localS ? localS.reduce(
    (accumulator, item) => accumulator + (item.price || 0),
    0
  ) : 0;

  const sumPeca = localS ? localS.reduce(
    (accumulator, item) => accumulator + (item.qtd || 0),
    0 
  ) : 0

  const orderData = {
    customer: {
      name: 'Nome do Cliente',
      address: 'Endereço do Cliente',

    },
  };

  return (
    <div className="cart-container">
      <Header/>
      <RouterLink to={'/homeclient'} dados={ <BtnArrow dados={<FaArrowAltCircleLeft/>} />  } ></RouterLink>
      <h2>Carrinho de compras</h2>
      <div className="products-list">
        {localS ? 
        <>
          {localS.map(product => (
            <div className="product-card" key={product.sku}>
              <div className='product-card-img'>
                <img src={product.photo} alt={`Imagem de ${product.name}`} />
              </div>
              <div className="product-details">
                <h3>{product.sku}</h3>
                <p>Preço: R$ {product.price}</p>
                <p>Quantidade: {product.qtd}</p>
                <p className='total-cart'>Total: {product.qtd * product.price}</p>
              </div>
              <div className='btn-excluir-cart'>
                <button>Excluir</button>
              </div>
          </div>))}
          
        </> :  <span className='status-cart'>Carrinho Vazio !!</span>}
      </div>
      {localS ? 
      <>
      <p>Total de Skus {localS ? <>{localS.length}</> : <></>} </p>
      <p>Total Peças {localS ? <>{sumPeca}</> : <></>} </p>
      
      <h3>Total da compra R$ {localS ? <>{sumLocal}</> : <></>} </h3>
      <div className="customer-info">
        <h2>Dados do Cliente</h2>
        <p><strong>Nome:</strong> {orderData.customer.name}</p>
      </div>
      <div className="additional-info">
        <h2>Informações Adicionais</h2>
        <div className="address-form">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={cep}
            onChange={handleCepChange}
          />
        </div>
        <div className="address-form">
          <label htmlFor="receiverName">Nome de quem vai receber:</label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            value={receiverName}
            onChange={handleReceiverNameChange}
          />
        </div>
        <div className="address-form">
          <label htmlFor="deliveryType">Tipo de entrega:</label>
          <select
            id="deliveryType"
            name="deliveryType"
            value={deliveryType}
            onChange={handleDeliveryTypeChange}
          >
            <option value="Sedex">Sedex</option>
            <option value="Sedex-Express">Sedex-Express</option>
          </select>
        </div>
        <div className="address-form">
          <button onClick={() => alert('Enviar pedido')}>Enviar Pedido</button>
        </div>
      </div>
      </> 
      : 
      <></>}
      
    </div>
  );
}

export default Cart;
