import { useState } from 'react'
import data from '../../data.json'

import MoonImage from '../../assets/destination/image-moon.png'
import MarsImage from '../../assets/destination/image-mars.png'
import EuropaImage from '../../assets/destination/image-europa.png'
import TitanImage from '../../assets/destination/image-titan.png'
import './destinations.styles.scss'

const Destinations = () => {


  const [currentDestination, setCurrentDestination] = useState(0)
  const { name, description, images, distance, travel } = data.destinations[currentDestination]

  // console.log(data.destinations[0]);


  const onSetDestination = (index) => {
    // console.log(data.destinations[0]);
    setCurrentDestination(index)
    console.log(images);
  }

  // const imgDestination = require(`../../assets/destination/${images.png}`);

  const setImage = (namePlanet) => {
    switch (namePlanet) {
      case 'Moon':
        return MoonImage
      case 'Mars':
        return MarsImage
      case 'Europa':
        return EuropaImage;
      case 'Titan':
        return TitanImage
      default:
        return false
    }
  }


  return (
    <div className="destination-container">
      <div className="wrapper">

        <h5 className="destination-subtitle">
          <span>01</span> pick your destination
        </h5>


        <div className="destination-elements-container">
          <div className="destination-image">
            <img className='rotate' src={setImage(name)} alt={name} />
          </div>

          <div className="destination-info-container">
            <div className="destination-links">
              <button
                onClick={() => onSetDestination(0)}
                className={`destination-link ${currentDestination === 0 && 'active'}`}
              >
                moon
              </button>
              <button
                onClick={() => onSetDestination(1)}
                className={`destination-link ${currentDestination === 1 && 'active'}`}
              >
                Mars
              </button>
              <button
                onClick={() => onSetDestination(2)}
                className={`destination-link ${currentDestination === 2 && 'active'}`}
              >
                Europa
              </button>
              <button
                onClick={() => onSetDestination(3)}
                className={`destination-link ${currentDestination === 3 && 'active'}`}
              >
                Titan
              </button>
            </div>
            <h1 className="destination-title">
              {name}
            </h1>

            <p className="destination-text">{description}</p>

            <hr />

            <div className="destination-distance-time-container">
              <div className="distance-container">
                <p className="info-title">avg. distance</p>
                <h3 className="info-data">{distance}</h3>
              </div>

              <div className="time-container">
                <p className="info-title">
                  est. travel time
                </p>
                <h3 className="info-data">
                  {travel}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      ))



    </div>
  )
}

export default Destinations