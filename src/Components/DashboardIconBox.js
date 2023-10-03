import { Stack, Typography } from "@mui/material"
import React from "react"
const DashboardIconBox = ({ Icon, title, value, iconBackground }) => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"20px 20px"}
      width={"100%"}
      sx={{
        background: (theme) => theme.palette.common.whiteGrey,
        borderRadius: "10px",
        margin: "5px"
      }}>
      <Stack>
        <Typography variant="h6" fontWeight={600} color={"gray"}>
          {title}
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          {value}
        </Typography>
      </Stack>
      <Icon
        sx={{
          fontSize: "40px",
          color: "white",
          background: (theme) => iconBackground || theme.palette.error.main,
          padding: "5px",
          borderRadius: "50%"
        }}
      />
    </Stack>
  )
}

export default DashboardIconBox
