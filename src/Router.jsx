import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Announce from './Pages/Announce'
import Schedule from './Pages/Schedule'
import MySchedule from './Pages/MySchedule'
import ReceiveSchedules from './Pages/ReceiveSchedules/indes'
import StatusSchedules from './Pages/StatusSchedules'
import PageLogin from './Pages/Login'

import React, { useContext } from 'react'

import { AuthProvider, AuthContext } from './Contexts/Login'
import Cart from './Pages/Cart'

export default function AppRouter() {

  const AdminPrivate = ({ children }) => {
    const { autenticado, loading, userData } = useContext(AuthContext);
    console.log(userData)
    if (loading ) {
      return <div className='loading'> Carregando...</div>
    }
  
    if (!autenticado) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
          <Route exact path='/login' element={<PageLogin/>} />

          <Route path="/" element={ <AdminPrivate><Home /> </AdminPrivate> } />
          {/*essa rota sera acessado somente para os clientes*/}
          <Route path="/category" element={<Category />} />
          <Route path='/cart' element ={<Cart/>} />

          {/*essa rota sera acessado somente os seller*/}
          <Route path="/announce" element={<Announce />} />
          <Route path="/schedule" element={ <AdminPrivate><Schedule /> </AdminPrivate>} />
          <Route path='/myschedule' element={<MySchedule/>} />
          
          {/*essa rota sera acessado somente para colaboradores da empresa*/}
          <Route path='/receiveschedules' element={<ReceiveSchedules/>} /> 
          <Route path='/statusschedules' element={<StatusSchedules/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
