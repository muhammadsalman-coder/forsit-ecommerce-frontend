import { Box, Stack } from "@mui/material"
import React from "react"
import SideBar from "./SideBar"

const Layout = ({ children }) => {
  return (
    <Stack direction={"row"} height={"100vh"}>
      <SideBar />
      <Stack
        flex={4}
        height={"100%"}
        sx={{ backgroundColor: (theme) => theme.palette.common.white }}>
        {children}
      </Stack>
    </Stack>
  )
}

export default Layout
