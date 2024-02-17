import Header from "../../../Components/Header"
import { Link } from "react-router-dom"
import BtnArrow from "../../../Components/Btn/BtnArrow"
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './style.css'
import supabase from "../../../supabaseClient"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../../Contexts/Login'

export default function MySchedule () {
  const { user } = useContext(AuthContext);
  const [seller, setSeller] = useState([])
  const [listSchedule, setSchedule] = useState([])


  const fechSchedule = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('schedule')
      .select('*')
      .then(({data, error}) => {
        if(error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  const fechtSellers = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('sellers')
      .select('*')
      .eq('email', user.email)
      .then(({data, error}) => {
        if(error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  useEffect(() => {
    if(user) {
      Promise.all([fechSchedule(),fechtSellers()])
      .then(([scheduleData, sellerData]) => {
        setSchedule(scheduleData)

        setSeller(sellerData)
        console.log(sellerData)
      })
    }
  },[user])

  if(user) {
    
  }
  
  const idSeller =  seller.map(item => {
    return item.id
  })


  const resSeller = listSchedule.filter(item => item.idseller == idSeller[0])

  const countStatusAprovacao = resSeller.filter(item => item.status === 'Aguardando Aprovação para Coleta' ).length

  const countStatusColeta = resSeller.filter(item => item.status === 'Aguardando Coleta' ).length

  const countStatusRota = resSeller.filter(item => item.status === 'Rota de Entrega' ).length

  const countStatusDesembarque = resSeller.filter(item => item.status === 'Aguardando Desembarque' ).length

  const countStatusConferencia = resSeller.filter(item => item.status === 'Em Conferencia' ).length

  const countStatusFinalizado = resSeller.filter(item => item.status === 'Finalizado' ).length

  const countStatusTotal = resSeller.length

  const convertResSeller = resSeller.map(item => {
    const dateAgendado = new Date(item.dateScheduling);
    const dateColeta = new Date(item.collectionDate)
    const dateEntregue = new Date(item.arrivalDate)

    const dataHoraFormatadaAgendado = dateAgendado.toLocaleString('pt-BR');
    const dateFormatadoColeta = dateColeta.toLocaleString('pt-BR')
    const dateFormatadaEntrega = dateEntregue.toLocaleString('pt-BR')

    return {
      ...item,
      dateScheduling: dataHoraFormatadaAgendado,  collectionDate: dateFormatadoColeta, arrivalDate: dateFormatadaEntrega
    };
  });

  return(
    <div>
      <Header />
      <Link to={'/homeseller'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>
      <h1>Gerenciar meus agendamentos</h1>
      <div className="card-schedule">
        <div className="aguardando-coleta">
           <div>Aguardando Aprovação</div>
          <div>{countStatusAprovacao}</div>
        </div>
        <div className="aguardando-coleta">
          <div>Aguardando Coleta</div>
          <div>{countStatusColeta}</div>
        </div>
        <div className="rota-entrega">
          <div>Rota de Entrega</div>
          <div>{countStatusRota}</div>
        </div>
        <div className="aguardando-desembarque">
            <div>Aguardando Desembarque</div>
            <div>{countStatusDesembarque}</div>
        </div>
        <div className="em-conferencia">
          <div>Em Conferencia</div>
          <div>{countStatusConferencia}</div>
        </div>
        <div className="disponivel-entrega">
          <div>Disponivel para Venda</div>
          <div>{countStatusFinalizado}</div>
        </div>
        <div className="total-agendas">
          <div>Total de agendas</div>
          <div>{countStatusTotal}</div>
        </div>
        
      </div>
      <div className="container-table-schedule">
      <table className="container-my-schedule">
        <thead>
          <tr>
            <th >Id</th>
            <th>Sku</th>
            <th>Quantidade Agendado</th>
            <th>Valor</th>
            <th>Nota Fiscal</th>
            <th>Data do agendamento</th>
            <th>Data Coleta</th>
            <th>Data da chegada</th>
            <th>Disponivel para venda</th>
            <th>Indisponivel para venda</th>
            <th>Placa</th>
            <th>CD</th>
            <th>Placa</th>
            <th >Status</th>
          </tr>
        </thead>
        <tbody>
          {convertResSeller.map((item) => (
            <tr key={item.schedule}> 
              <td>
                {item.schedule}
              </td> 
              <td>
                {item.sku}
              </td>
              <td>
                {item.ammount}
              </td>
              <td>
                {item.price}
              </td>
              <td>
                {item.nf}
              </td>
              <td>
                {item.dateScheduling}
              </td>
              <td>
                {item.collectionDate}
              </td>
              <td>
                {item.arrivalDate}
              </td>
              <td>
                {item.availableSale}
              </td>
              <td>
                {item.unavailableSale}
              </td>
              <td>
                {item.plate}
              </td>
              <td>
                {item.cd}
              </td>
              <td>
                {item.status}
              </td>
            </tr>
            ))}
          </tbody>
      </table>
      </div>
      
    </div>
  )
}