import { NavLink } from 'react-router-dom'
import { Label } from '../../atoms'
import './index.scss'

const index = () => {
  return (
    <nav className='auth-navbar'>
      <div className="auth-navbar__container">
        <div className="auth-navbar__left">
          <Label
            text='DigiWallet'
            fontSize='1.8rem'
            fontWeight='bold'
          />
        </div>

        <div className="auth-navbar__right">
          <ul className='auth-navbar__right__items'>
            <li>
              <NavLink className='navbar_item' to='/login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className='navbar_item' to='/register'>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default index