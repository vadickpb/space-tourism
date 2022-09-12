import { useMediaQuery } from 'react-responsive'
import data from '../../data.json'

import img_lg01 from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import img_lg02 from '../../assets/technology/image-space-capsule-portrait.jpg'
import img_lg03 from '../../assets/technology/image-spaceport-portrait.jpg'


import LargeImageTec from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import SmallImageTec from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import './tecnology.styles.scss'
import { useState } from 'react'

const Tecnology = () => {

  const [currentTecnology, setCurrentTecnology] = useState(0)
  const { name, description } = data.technology[currentTecnology]

  // const isDesktopOrMovile = useMediaQuery({
  //   query: '(min-width: 1000px)'
  // })

  // console.log(data.technology[currentTecnology]);

  // let img = isDesktopOrMovile ? LargeImageTec : SmallImageTec

  const setImage = (nameImage) => {
    switch (nameImage) {
      case ('Launch vehicle'):
        return img_lg01;
      case ('Spaceport'):
        return img_lg03;
      case ('Space capsule'):
        return img_lg02;
      default:
        return false;
    }
  }
  return (
    <div className="tecnology-container">
      <div className="wrapper">

        <div className="tecnology-subtitle">
          <span>03</span> Space launch 101
        </div>

        <div className="tecnology-info-image-container">

          <div className="tecnology-links">
            <button
              className={`tecnology-link ${currentTecnology === 0 && 'active'}`}
              onClick={() => setCurrentTecnology(0)}
            >
              1
            </button>
            <button
              className={`tecnology-link ${currentTecnology === 1 && 'active'}`}
              onClick={() => setCurrentTecnology(1)}
            >
              2
            </button>
            <button
              className={`tecnology-link ${currentTecnology === 2 && 'active'}`}
              onClick={() => setCurrentTecnology(2)}
            >
              3
            </button>
          </div>

          <div className="tecnology-info-container">
            <h5 className="tecnology-title-first">
              The terminology...
            </h5>
            <h1 className="tecnology-name">
              {name}
            </h1>
            <p className="tecnology-text">
              {description}
            </p>
          </div>

          <div className="tecnology-image-container">
            <img src={setImage(name)} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tecnology