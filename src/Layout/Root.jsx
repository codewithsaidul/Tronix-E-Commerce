import { Outlet } from "react-router-dom"
import Navbar from "../component/SharedComponent/Navbar"



const Root = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
    </div>
  )
}

export default Root