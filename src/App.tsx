import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Home from './components/pages/Home'
import Topup from './components/pages/Topup'
import Transfer from './components/pages/Transfer'
import Games from './components/pages/Games'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/' element={<Home />} />
          <Route path='/topup' element={<Topup />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/games' element={<Games />} />
          <Route path='/logout' element={<h1>Logout</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
