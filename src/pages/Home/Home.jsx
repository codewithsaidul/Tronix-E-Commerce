import { Stack, useTheme } from "@mui/material/"


const Home = () => {

    const theme = useTheme();
    console.log(theme.palette.background.paper)

  return (
    <Stack sx={{background: theme.palette.primary.main, width: "100%"}}>Home</Stack>
  )
}

export default Home