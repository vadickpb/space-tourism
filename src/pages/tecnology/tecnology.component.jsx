import { useMediaQuery } from 'react-responsive'

import LargeImageTec from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import SmallImageTec from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import './tecnology.styles.scss'

const Tecnology = () => {

  const isDesktopOrMovile = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  let img = isDesktopOrMovile ? LargeImageTec : SmallImageTec
  return (
    <div className="tecnology-container">
      <div className="tecnology-subtitle">
        <span>03</span> Space launch 101
      </div>

      <div className="tecnology-info-image-container">

        <div className="tecnology-links">
          <div className="tecnology-link active">1</div>
          <div className="tecnology-link">2</div>
          <div className="tecnology-link">3</div>
        </div>

        <div className="tecnology-info-container">
          <h5 className="tecnology-title-first">
            The terminology...
          </h5>
          <h1 className="tecnology-name">
            Launch vehicle
          </h1>
          <p className="tecnology-text">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
            it's quite an awe-inspiring sight on the launch pad!.
          </p>
        </div>

        <div className="tecnology-image-container">
          <img src={img} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Tecnology