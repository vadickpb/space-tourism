import React from 'react'
import Planets from '../../components/planets/planets.component'
import Navigation from '../../ui/navigation/navigation.component'

const Moon = () => {
  return (
    <div className="moon-container">
      <Navigation />
      <Planets />
    </div>
  )
}

export default Moon