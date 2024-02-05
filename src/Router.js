import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Announce from './Pages/Announce'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/announce" element={<Announce />} />
      </Routes>
    </BrowserRouter>
  )
}
