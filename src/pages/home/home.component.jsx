import React from 'react'
import HeroInfo from '../../components/hero-info/hero-info.component'
import Navigation from '../../ui/navigation/navigation.component'
import backgroundMovile from '../../assets/home/background-home-mobile.jpg'

import './home.styles.css'



const Home = () => {
  return (
    <div className="container" style={{backgroundImage: `url(${backgroundMovile})`  }}>
      <Navigation />
      <HeroInfo />
    </div>
    
  )
}

export default Home