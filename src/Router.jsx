import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Announce from './Pages/Announce'
import Schedule from './Pages/Schedule'
import MySchedule from './Pages/MySchedule'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path='/myschedule' element={<MySchedule/>} />
      </Routes>
    </BrowserRouter>
  )
}
