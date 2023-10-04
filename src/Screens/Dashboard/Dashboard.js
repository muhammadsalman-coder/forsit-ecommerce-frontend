import React from "react"
import Layout from "../../Layout/Layout"
import { Stack, Toolbar, Typography, useTheme } from "@mui/material"
import DashboardIconBox from "../../Components/DashboardIconBox"
import InsertChartIcon from "@mui/icons-material/InsertChart"
import ListAltIcon from "@mui/icons-material/ListAlt"
import InventoryIcon from "@mui/icons-material/Inventory"
import { useGetStatsQuery } from "../../Api/Resources/order"
import { getDisplayPrice } from "../Orders/Orders"
const Dashboard = () => {
  const theme = useTheme()
  const { data, isLoading, isFetching } = useGetStatsQuery()
  return (
    <>
      <Toolbar>
        <Typography variant="h2" color="gray" fontWeight={600}>
          Welcome to Dashboard
        </Typography>
      </Toolbar>
      <Stack direction={"row"}>
        <DashboardIconBox
          title="Last Weekly Sales"
          value={getDisplayPrice(data?.lastWeek?.weeklySales || 0, true)}
          Icon={InsertChartIcon}
          iconBackground={theme.palette.error.main}
        />
        <DashboardIconBox
          title="Last Weekly Order"
          value={data?.lastWeek?.orderCount || 0}
          Icon={ListAltIcon}
          iconBackground={theme.palette.success.main}
        />
        <DashboardIconBox
          title="Last Total Products"
          value={data?.totalProduct || 0}
          Icon={InventoryIcon}
          iconBackground={theme.palette.warning.main}
        />
      </Stack>
    </>
  )
}

export default Dashboard
