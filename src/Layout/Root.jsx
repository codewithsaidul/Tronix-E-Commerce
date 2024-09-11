import { Outlet } from "react-router-dom"
import Navbar from "../component/SharedComponent/Navbar"
import { Box } from "@mui/material"


const Root = () => {
  return (
    <Box>
      <Navbar />
        <Outlet />
    </Box>
  )
}

export default Root