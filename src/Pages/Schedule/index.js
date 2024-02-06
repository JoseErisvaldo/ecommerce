import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import BtnArrow from '../../Components/Btn/BtnArrow'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import {
  DescriptionInput,
  NumberInput,
  SelectInput
} from '../../Components/Inputs'
import './style.css'
import BtnSubmit from '../../Components/Btn/BtnSubmit'

const Option = ({ value, label }) => <option value={value}>{label}</option>

export default function Schedule() {
  function agendar() {
    console.log('Agendar !')
  }

  // Lista de opções para o SelectInput
  const options = [
    { value: 'SKU001', label: 'SKU001' },
    { value: 'SKU002', label: 'SKU002' }
    // Adicione mais opções conforme necessário
  ]
  ///valueOption={'SKU001'} SelecionarOption={'SKU001'}
  return (
    <div>
      <Header />
      <Link to={'/'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>
      <div className="container-inputs-schedule">
        <SelectInput>
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </SelectInput>
        <DescriptionInput />
        <NumberInput placeNumber={'Digite a quantidade'} />
        <BtnSubmit onClickSubmit={agendar} submit={'Agendar'} />
      </div>
    </div>
  )
}
