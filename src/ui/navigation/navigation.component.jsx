import Logo from '../../assets/shared/logo.svg'

import './navigation.styles.scss'


const Navigation = () => {
  return (


    <div className='navigation-container'>
      <div className="navigation-logo">
        <img src={Logo} alt="" />
        {/* <div className="navigation-line"></div> */}
        <hr />
      </div>

      <div className="navigation-burger" id="">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      <ul className='navigation-menu'>
        <li><a className="navigation-link active-menu" href=""><span>00</span> home</a> </li>
        <li><a className="navigation-link" href=""><span>01</span> destination</a> </li>
        <li><a className="navigation-link" href=""><span>02</span> crew</a> </li>
        <li><a className="navigation-link" href=""><span>03</span> tecnology</a> </li>
      </ul>
    </div>

  )
}

export default Navigation