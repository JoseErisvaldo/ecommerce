import BtnArrow from "../../Components/Btn/BtnArrow"
import Header from "../../Components/Header"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import supabaseClient from "../../supabaseClient";
import { useEffect, useState } from "react";
import './style.css'


export default function StatusSchedules () {
  const [listSchedule, setSchedule] = useState([])
  async function loadingSchedule () {
    try {
      const {data, erro} = await supabaseClient
      .from('schedule')
      .select('*')
      setSchedule(data)
    } catch (error) {
      console.log(`Erro na requisição ${error}`)      
    }
  }
  useEffect(() => {
    loadingSchedule ()
  },[])

  function status (e) {
    console.log(e.target.textContent)
  }
  return(
    <div>
      <Header />
      <BtnArrow dados={<FaArrowAltCircleLeft />}/>
      <h2>Gerenciar os agendamento !</h2>
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
              <th className="to-manage-status-schedule-th">Status</th>
            </tr>
          </thead>
          <tbody>
            {listSchedule.map((item) => (
              <tr onClick={status} key={item.schedule}> 
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
                <td className="to-manage-status-schedule-td">
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
