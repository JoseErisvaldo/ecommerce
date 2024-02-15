import Header from '../../../Components/Header'
import { Link } from 'react-router-dom'
import BtnArrow from '../../../Components/Btn/BtnArrow'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { NumberInput } from '../../../Components/Inputs'
import './style.css'
import BtnSubmit from '../../../Components/Btn/BtnSubmit'
import { useEffect, useState, useContext } from 'react'
import supabase from '../../../supabaseClient'
import Announcement from '../../../Components/Cards'
import { AuthContext } from '../../../Contexts/Login'


export default function Schedule() {
  const { user } = useContext(AuthContext);
  let [sku, setSku] = useState('')
  let [qtd, setQtd] = useState('')
  let [priceBd, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const [schedule, setSchedule] = useState([])
  const [users, setUsers] = useState([])

  async function loadingProducts() {
    const { data, error } = await supabase.from('products').select('*')
    setProducts(data)
  }

  async function loadingSchedule() {
    const { data, error } = await supabase.from('schedule').select('*')
    setSchedule(data)
  }

  async function loadingUser () {
    try {
      const {data, error} = await supabase.from('users').select('*').eq("email" ,user.email)
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
   
  }

  useEffect(() => {
    loadingProducts()
    loadingSchedule()
    loadingUser ()
  }, [])
  const filterUser = users.map(item => {
    return item.id
  })
  const lengthSchedule = schedule.length
  let array = products.filter(item => item.idSeller == filterUser[0])

  function selectOption(e) {
    setSku(e.target.value)
    const filterSkuPrice = products
      .filter(item => item.sku === e.target.value)
      .map(price => {
        return price.price
      })
    setPrice(filterSkuPrice)
  }

  async function agendar() {
    try {
      if (sku === '' || qtd === '') {
        return
      }
      const { data, error } = await supabase
        .from('schedule')
        .insert([
          {
            schedule: lengthSchedule + 1,
            sku: sku,
            ammount: qtd,
            price: 12,
            idSeller: filterUser[0],
            status: 'Aguardando Aprovação para Coleta'
          }
        ])
        .select()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Header />
      <Link to={'/homeseller'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>
      <div className="container-inputs-schedule">
        <select onChange={selectOption} className="select-option">
          {array.map(item => (
            <option key={item.sku} value={item.sku}>
              {item.sku}
            </option>
          ))}
        </select>
        <div>Valor: {priceBd}</div>
        <NumberInput
          onNumber={e => setQtd(e.target.value)}
          value={qtd} // Adicione esta linha
          placeNumber={'Digite a quantidade'}
        />
        <BtnSubmit onClickSubmit={agendar} submit={'Agendar'} />
      </div>
      <Announcement tittle={'Ver agendamentos'} descripton={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"} link={'/myschedule'} />
    </div>
  )
}
