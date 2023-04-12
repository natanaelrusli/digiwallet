import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

import './App.css'

import Home from './components/pages/Home'
import Topup from './components/pages/Topup'
import Transfer from './components/pages/Transfer'
import Games from './components/pages/Games'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { AuthContext, AuthProvider } from './context/AuthContext'

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)
  if (!authenticated) return <Navigate to="/login" replace />

  return <Outlet />
}

function App() {  
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Home />} />
              <Route path='/topup' element={<Topup />} />
              <Route path='/transfer' element={<Transfer />} />
              <Route path='/games' element={<Games />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
