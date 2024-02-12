import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import './style.css'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import BtnArrow from '../../Components/Btn/BtnArrow'
import supabase from '../../supabaseClient'

export default function Announce() {
  let [descriptionInput, setDescriptionInput] = useState('')
  let [categoryInput, setCategoryInput] = useState('')
  let [fileInput, setFileInput] = useState('')
  let [sizeInput, setSizeInput] = useState('')
  let [barCode, setBarCodeInput] = useState('')
  let [valor, setValor] = useState('')
  let [numeroFormatado, setNumeroFormatado] = useState('')

  const formatarNumero = valor => {
    let numero = parseFloat(valor.replace(',', '.'))

    if (!isNaN(numero)) {
      const numeroFormatado = numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      setNumeroFormatado(numeroFormatado)
      console.log(numeroFormatado)
    } else {
      alert('Este campo deve ser digitado somente numero !!')
    }
  }

  const handleChange = event => {
    let valor = event.target.value
    setValor(valor)
    formatarNumero(valor)
  }

  const onDescription = e => {
    let description = e.target.value
    setDescriptionInput(description)
  }
  const onCategory = e => {
    let category = e.target.value
    setCategoryInput(category)
  }
  const onFile = e => {
    let onFile = e.target.files[0]
    setFileInput(onFile)
    console.log(onFile)
  }
  const onSize = e => {
    let size = e.target.value
    setSizeInput(size)
  }

  function isBarCode(barCode) {
    if (!isNaN(barCode)) {
      setBarCodeInput(barCode)
    } else {
      alert('Este campo deve ser digitado somente numero !!')
    }
  }
  const onBarCode = e => {
    let barCode = e.target.value
    isBarCode(barCode)
  }
  const [countSku, setCountSku] = useState([])
  async function loadingCatalago() {
    const { data, error } = await supabase.from('products').select('*')
    setCountSku(data)
  }
  useEffect(() => {
    loadingCatalago()
  }, [])

  const resCout = countSku.length
  async function cadCatalogo() {
    const url = 'https://kiexzvmtnrgrvlrjsbmp.supabase.co/storage/v1/object/public/imagensitems/'
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([
          {
            sku: `SKU${resCout + 1}`,
            description: descriptionInput,
            idSeller: '1001',
            photo: url + fileInput.name,
            size: sizeInput,
            category: categoryInput,
            status: 'Ativo',
            barCode: barCode,
            price: valor
          }
        ])
        .select()

      const {dataImg, errorImg} = await supabase.storage
      .from('imagensitems')
      .upload(fileInput.name, fileInput)

      setDescriptionInput('')
      setCategoryInput('')
      setFileInput('')
      setSizeInput('')
      setBarCodeInput('')
      setValor('')
      setNumeroFormatado('')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header />
      <Link to={'/'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>

      <div className="container-announce">
        <div className="card-dados-cad">
          <h3>Promova seus produtos de maneira simples e eficaz!</h3>
          <h4>Adicionar item ao seu catalogo !</h4>
          <input
            onChange={onDescription}
            value={descriptionInput}
            className="cad-description"
            type="text"
            placeholder="Descrição do produto"
          />
          <select
            value={categoryInput}
            onChange={onCategory}
            className="cad-category"
          >
            <option value={''}>Selecionar Categorias</option>
            <option value={'Sapatos'}>Sapatos</option>
            <option value={'Roupas'}>Roupas</option>
          </select>
          <input onChange={onFile} className="cad-file" type="file" />
          <select onChange={onSize} className="cad-size">
            <option value={''}>Selecionar Tamanho</option>
            <option value={'P'}>P</option>
            <option value={'PP'}>PP</option>
            <option value={'M'}>M</option>
            <option value={'G'}>G</option>
            <option value={'Unico'}>Unico</option>
          </select>
          <input
            value={barCode}
            onChange={onBarCode}
            className="cad-barcode"
            type="text"
            placeholder="Codigo de barras"
          />
          <input
            value={valor}
            className="cad-price"
            type="text"
            id="numero"
            onChange={handleChange}
            placeholder="Digite o valor"
          />
        </div>
        <button onClick={cadCatalogo} className="btn-cad-products">
          Cadastrar
        </button>
      </div>
    </>
  )
}
