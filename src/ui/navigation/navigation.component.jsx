import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/logo.svg'

import './navigation.styles.scss'


const Navigation = () => {
  return (


    <div className='navigation-container'>
      <Link to='/' className="navigation-logo">
        <img src={Logo} alt="" />
        <hr />
      </Link>

      <div className="navigation-burger" id="">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      <ul className='navigation-menu'>
        <li>
          <NavLink 
            className={({isActive}) => `navigation-link ${isActive ? 'active-menu' : ''}`} 
            to="/">
            <span>00</span> home
          </NavLink> 
        </li>
        <li>
          <NavLink 
            className={({isActive}) => `navigation-link ${isActive ? 'active-menu' : ''}`} 
            to="destination">
              <span>01</span> destination
          </NavLink> 
        </li>
        <li>
          <NavLink 
            className={({isActive}) => `navigation-link ${isActive ? 'active-menu' : ''}`} 
            to="/crew">
            <span>02</span> crew
          </NavLink> 
        </li>
        <li>
          <NavLink 
            className={({isActive}) => `navigation-link ${isActive ? 'active-menu' : ''}`} 
            to="/tecnology">
              <span>03</span> tecnology
          </NavLink> 
        </li>
      </ul>
    </div>

  )
}

export default Navigation