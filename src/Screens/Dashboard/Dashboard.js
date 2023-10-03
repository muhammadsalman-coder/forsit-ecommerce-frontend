import React from "react"
import Layout from "../../Layout/Layout"
import { Stack, Toolbar, Typography, useTheme } from "@mui/material"
import DashboardIconBox from "../../Components/DashboardIconBox"
import InsertChartIcon from "@mui/icons-material/InsertChart"
import ListAltIcon from "@mui/icons-material/ListAlt"
import InventoryIcon from "@mui/icons-material/Inventory"
const Dashboard = () => {
  const theme = useTheme()
  return (
    <>
      <Toolbar>
        <Typography variant="h2" color="gray" fontWeight={600}>
          Welcome to Dashboard
        </Typography>
      </Toolbar>
      <Stack direction={"row"}>
        <DashboardIconBox
          title="Weekly Sales"
          value="54 USD"
          Icon={InsertChartIcon}
          iconBackground={theme.palette.error.main}
        />
        <DashboardIconBox
          title="Weekly Order"
          value="57"
          Icon={ListAltIcon}
          iconBackground={theme.palette.success.main}
        />
        <DashboardIconBox
          title="Total Products"
          value="10"
          Icon={InventoryIcon}
          iconBackground={theme.palette.warning.main}
        />
      </Stack>
    </>
  )
}

export default Dashboard
