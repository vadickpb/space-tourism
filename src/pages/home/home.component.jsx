import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundMovile from '../../assets/home/background-home-mobile.jpg'

import './home.styles.scss'


const Home = () => {

  const navigate = useNavigate()
  return (


    <div className="home-container">
      <div className="wrapper">
        <div className="home-info-container">
          <h5 className='home-sub-title'>
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="home-title">Space</h1>
          <p className="home-text">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <button 
          className="home-button"
          onClick={() => navigate('/destination')}
        >
          <h3 className="text-button">Explore</h3>
        </button>
      </div>
    </div>



  )
}

export default Home