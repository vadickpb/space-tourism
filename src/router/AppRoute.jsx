import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/home.component"
import Navigation from "../ui/navigation/navigation.component"
import Destinations from "../pages/destinations/destinations.component"
import Crew from "../pages/crew/crew.component"
import Tecnology from "../pages/tecnology/tecnology.component"


const AppRoute = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/crew" element={<Crew />}/>
        <Route path="/tecnology" element={<Tecnology />}/>
      </Routes>
    </>
  )
}

export default AppRoute