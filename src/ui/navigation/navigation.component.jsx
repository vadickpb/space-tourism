import Logo from '../../assets/shared/logo.svg'
import './navigation.styles.css'
import backgroundMovile from '../../assets/home/background-home-mobile.jpg'


const Navigation = () => {
  return (


      <div className='navigation-container'>
        <img className="logo" src={Logo} alt="" />

        <div className="burger" id="">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="menu hidden" id="menu">
          <div className="slide-menu animate__animated animate__fadeInLeft">
            <ul>
              <li><a href="">Collections</a> </li>
              <li><a href="">Men</a> </li>
              <li><a href="">Women</a> </li>
              <li><a href="">About</a> </li>
              <li><a href="">Contact</a> </li>
            </ul>
          </div>
        </div>
      </div>

  )
}

export default Navigation