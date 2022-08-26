import Logo from '../../assets/shared/logo.svg'
import './navigation.styles.css'


const Navigation = () => {
  return (
    <div className='navigation-container'>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Navigation