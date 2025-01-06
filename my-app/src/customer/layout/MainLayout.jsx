import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = () => {
  return (
    <>
    <Navigation/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default MainLayout 