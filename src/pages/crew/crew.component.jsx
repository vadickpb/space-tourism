import CrewImage from '../../assets/crew/image-douglas-hurley.png'

import './crew.styles.scss'

const Crew = () => {
  return (
    <div className="crew-container">

      <div className="wrapper">

        <h5 className="crew-subtitle">
          <span>02</span> Meet your crew
        </h5>

        <div className="crew-info-image-container">

          <div className="crew-info-container">

            <h3 className="crew-job">
              commander
            </h3>

            <h1 className="crew-name">
              Douglas Hurley
            </h1>

            <p className="crew-text">
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
            </p>

            <div className="circle-links-container">
              <div className="circle-link active-circle"></div>
              <div className="circle-link"></div>
              <div className="circle-link"></div>
              <div className="circle-link"></div>
            </div>

          </div>

          <div className="crew-image">
            <img src={CrewImage} alt="" />
            <hr className='hidden' />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Crew