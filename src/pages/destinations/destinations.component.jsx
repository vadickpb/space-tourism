import MoonImage from '../../assets/destination/image-moon.png'
import './destinations.styles.scss'

const Destinations = () => {
  return (
    <div className="destination-container">
      <h5 className="destination-subtitle">
        <span>01</span> pick your destination
      </h5>

      <div className="destination-elements-container">
        <div className="destination-image">
          <img src={MoonImage} alt="" />
        </div>

        <div className="destination-info-container">
          <div className="destination-links">
            <a href="" className="destination-link">moon</a>
            <a href="" className="destination-link">mars</a>
            <a href="" className="destination-link">europa</a>
            <a href="" className="destination-link">tita</a>
          </div>
          <h1 className="destination-title">
            Moon
          </h1>

          <p className="destination-text">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

          <hr />

          <div className="destination-distance-time-container">
            <div className="distance-container">
              <p className="info-title">avg. distance</p>
              <h3 className="info-data">384,400 km</h3>
            </div>

            <div className="time-container">
              <p className="info-title">
                est. travel time
              </p>
              <h3 className="info-data">
                3 days
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations