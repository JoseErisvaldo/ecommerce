import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Announce from './Pages/Seller/Announce'
import Schedule from './Pages/Seller/Schedule'
import MySchedule from './Pages/Seller/MySchedule'
import ReceiveSchedules from './Pages/Seller/ReceiveSchedules/indes'
import StatusSchedules from './Pages/StatusSchedules'
import PageLogin from './Pages/Login'

import React, { useContext } from 'react'

import { AuthProvider, AuthContext } from './Contexts/Login'
import Cart from './Pages/Cart'
import Stock from './Components/Seller/Stock'
import HomeClient from './Pages/HomeClient'
import HomeSeller from './Pages/Seller/HomeSeller'
import ManageAd from './Components/Seller/ManageAd'
import Products from './Pages/Products'

export default function AppRouter() {

  const AdminPrivate = ({ children }) => {
    const { autenticado, loading, userData, userSeller } = useContext(AuthContext);
    if (loading ) {
      return <div className='loading'> Carregando...</div>
    }
  
    if (!autenticado) {
      return <Navigate to="/login" />;
    }


    if(autenticado && userData === false && userSeller === false) {
      return <Navigate to="/homeclient"/>
    }
    if(autenticado && userData === false && userSeller === true) {
      return <Navigate to="/homeseller"/>
    }

    return children;
  };

  
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
          <Route exact path='/login' element={<PageLogin/>} />

          <Route path="/" element={ <AdminPrivate> <Home /> </AdminPrivate> } />
          {/*essa rota sera acessado somente para os clientes*/}
          <Route path="/category" element={  <Category />  } />
          <Route path='/cart' element ={ <Cart/> } />
          <Route path='/homeclient' element={ <HomeClient/> } />
          <Route path='/products/:idParams' element={<Products/>} />

          {/*essa rota sera acessado somente os seller*/}
          <Route path="/announce" element={   <Announce />   } />
          <Route path="/schedule" element={   <Schedule />   } />
          <Route path='/homeseller' element={   <HomeSeller/>    } />
          <Route path='/myschedule' element={  <MySchedule/>     } />
          <Route path='/stock' element={  <Stock/>   } />
          <Route path='/managead' element={   <ManageAd/>    } />
          
          {/*essa rota sera acessado somente para colaboradores da empresa*/}
          <Route path='/receiveschedules' element={  <ReceiveSchedules/>   } /> 
          <Route path='/statusschedules' element={  <StatusSchedules/>    } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
