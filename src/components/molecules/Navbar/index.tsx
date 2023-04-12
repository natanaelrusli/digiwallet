import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { Label } from '../../atoms'
import './index.scss'
import { AuthContext } from '../../../context/AuthContext'
import { useCookies } from 'react-cookie'

const index = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const [, setCookie, removeCookie] = useCookies(['token']);
  
  const handleLogout = () => {
    setAuthenticated(false)
    removeCookie('token')
  }
  
  return (
    <nav className='navbar'>
      <div className="navbar__container">
        <div className="navbar__left">
          <Label
            text='DigiWallet'
            fontSize='1.8rem'
            fontWeight='bold'
          />
        </div>

        <div className="navbar__right">
          <ul className='navbar__right__items'>
            <li>
              <NavLink className='navbar_item' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='navbar_item' to='/transfer'>
                Transfer
              </NavLink>
            </li>
            <li>
              <NavLink className='navbar_item' to='/topup'>
                Topup
              </NavLink>
            </li>
            <li>
              <NavLink className='navbar_item' to='/games'>
                Games
              </NavLink>
            </li>
            <li>
              <div className='navbar_item' onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default index