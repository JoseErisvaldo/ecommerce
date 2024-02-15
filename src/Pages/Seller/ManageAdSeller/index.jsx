import Header from "../../../Components/Header"
import { Link } from "react-router-dom"
import BtnArrow from "../../../Components/Btn/BtnArrow"
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './style.css'
import ManageAd from "../../Components/ManageAd"


export default function MySchedule () {


  return(
    <div>
      <Header />
      <Link to={'/homeseller'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>
      <ManageAd/>
    </div>
  )
}