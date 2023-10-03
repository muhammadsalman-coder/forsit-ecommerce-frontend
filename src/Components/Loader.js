import React from "react"
import { Box } from "@mui/system"
import SyncLoader from "react-spinners/SyncLoader"

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 20,
        top: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "rgba(10,10,10,0.5)",
        backdropFilter: "blur(1px)"
      }}>
      <SyncLoader color={"#7364db"} />
    </Box>
  )
}

export default Loader
