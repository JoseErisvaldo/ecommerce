import Header from "../../Components/Header"
import { Link } from "react-router-dom"
import BtnArrow from "../../Components/Btn/BtnArrow"
import { FaArrowAltCircleLeft } from 'react-icons/fa'
export default function MySchedule () {
  return(
    <div>
      <Header />
      <Link to={'/'}>
        <BtnArrow dados={<FaArrowAltCircleLeft />} />
      </Link>
      <h1> Schedule</h1>
    </div>
  )
}