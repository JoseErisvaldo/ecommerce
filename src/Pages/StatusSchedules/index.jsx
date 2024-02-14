import BtnArrow from "../../Components/Btn/BtnArrow"
import Header from "../../Components/Header"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import supabaseClient from "../../supabaseClient";
import { useEffect, useState } from "react";
import './style.css'
import React from 'react';
import Modal from 'react-modal';
import BtnSubmit from "../../Components/Btn/BtnSubmit";

const customStyles = {
  content: {
    height: '80vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'scroll'
  },
};


Modal.setAppElement('#root');

export default function StatusSchedules () {
  const [listSchedule, setSchedule] = useState([])
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [idschedule, setIdschedule] =useState([])
  const [select, setEselect] = useState('')
  const [collectionDate, setcollectionDate] = useState(null)
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
  async function idSchedule () {
    try {
      const {data, error} = await supabaseClient
      .from('idschedule')
      .select('*')
      setIdschedule(data)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    loadingSchedule ()
    idSchedule ()
  },[listSchedule])

  function openModal(schedule) {
    setSelectedSchedule(schedule);
  }

  function closeModal() {
    setSelectedSchedule(null);
  }
  async function gerarNF () {
    const nf = Math.round(Math.random() * 1000)
    const { data, error } = await supabaseClient
      .from('schedule')
      .update({ nf: nf })
      .eq('schedule',selectedSchedule)
      .select()
      console.log(data)
  }

  async function handleAgendar (){ 
    const {data, error} = await supabaseClient
    .from('schedule')
    .update({collectionDate: collectionDate})
    .eq('schedule', selectedSchedule)
  }
  
  return(
    <div>
      <Header />
      
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
                <td className="to-manage-status-schedule-td">
                  <button className="btnModal" onClick={e => openModal(item.schedule)}>{item.status}</button>
                  {selectedSchedule && (
                    <Modal
                      isOpen={!!selectedSchedule}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <button onClick={closeModal}>Fechar</button>
                      <h2>
                      Número da agenda: {selectedSchedule}
                      </h2>
                      <div>
                        {listSchedule
                          .filter((item) => item.schedule === selectedSchedule)
                          .map((item) => (
                            <div className="container-modal-schedule" key={item.schedule}>
                              <p> </p>
                              <p>Sku: {item.sku}</p>
                              <p>Quantidade Agendado: {item.ammount}</p>
                              <p>Valor: {item.price}</p>

                              <p className="nf-schedule">
                                Nota Fiscal:
                                  {item.nf ?
                                    <span className="status-nf">{item.nf}</span> :
                                    <BtnSubmit onClickSubmit={gerarNF} submit={'Gerar NF'}/>
                                  }
                              </p>

                              <p>Data do agendamento: {item.dateScheduling}</p>
                              <p>
                                Data Coleta: 
                                {item.collectionDate ? 
                                <span className="collectiondate-finish">{item.collectionDate}</span> : 
                                <span className="collectiondate-schedule">
                                  <input onChange={e => setcollectionDate(e.target.value)} type="date" /> 
                                  <BtnSubmit onClickSubmit={handleAgendar} submit={'Agendar'}/>
                                </span>}
                              </p>
                              <p>Data da chegada: {item.arrivalDate}</p>
                              <p>Disponível para venda: {item.availableSale}</p>
                              <p>Indisponível para venda: {item.unavailableSale}</p>
                              <p>Placa: {item.plate}</p>
                              <p>CD: {item.cd}</p>
                              <p>Status: {item.status}</p>
                              
                              <select onChange={e => setEselect(e.target.value)} name="" id="" className="modal-select-schedule">
                              {idschedule.filter(status => status.description !== item.status)
                              .map((item) => (
                                <option key={item.description} value={item.description}>{item.description}</option>
                              ))}
                              </select>
                              
                            </div>
                          ))}
                      </div>
                    </Modal>
                  )}
                </td>
              </tr>
            ))}
            
            </tbody>
        </table>
      </div>
      
    </div>
  )
}
