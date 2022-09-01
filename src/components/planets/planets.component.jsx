import React from 'react'

const Planets = () => {
  return (
    <div className="planets-container">
      <div className="title-destination">
        <span>01</span> Pick your destination
      </div>

      <img className='planet' src="" alt="planet" />

      <div className="nav-links">
        <div className="link">Moon</div>
        <div className="link">Mars</div>
        <div className="link">Europa</div>
        <div className="link">titan</div>
      </div>
    </div>
  )
}

export default Planets