import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}
