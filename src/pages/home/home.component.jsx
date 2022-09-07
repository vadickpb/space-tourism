import React from 'react'
import backgroundMovile from '../../assets/home/background-home-mobile.jpg'

import './home.styles.scss'


const Home = () => {
  return (

    <>
      <div className="home-container">
        <div className="home-info-container">
          <h5 className='home-sub-title'>
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="home-title">Space</h1>
          <p className="home-text">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="home-button">
          <h3 className="text-button">Explore</h3>
        </div>
      </div>

    </>

  )
}

export default Home