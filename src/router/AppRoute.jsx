import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/home.component"
import Navigation from "../ui/navigation/navigation.component"
import Destinations from "../pages/destinations/destinations.component"


const AppRoute = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
      </Routes>
    </>
  )
}

export default AppRoute