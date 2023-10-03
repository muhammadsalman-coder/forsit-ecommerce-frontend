import * as React from "react"
import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard"
import ReceiptIcon from "@mui/icons-material/Receipt"
import InventoryIcon from "@mui/icons-material/Inventory"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useLocation, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import SidebarItem from "./SidebarItem"

const sideBarItem = [
  {
    title: "Dashboard",
    route: "/",
    icon: <SpaceDashboardIcon />
  },
  {
    title: "Orders",
    route: "/orders",
    icon: <ReceiptIcon />
  },
  {
    title: "Products",
    route: "/products",
    icon: <InventoryIcon />
  },
  {
    title: "Place Order",
    route: "/placeorder",
    icon: <ShoppingCartIcon />
  }
]
const drawerWidth = 240
export default function PermanentDrawerLeft() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
      variant="permanent"
      anchor="left">
      <Toolbar>
        <Typography variant="h2" fontWeight={600}>
          Forsit Test
        </Typography>
      </Toolbar>
      <Divider />

      <List>
        {sideBarItem.map((val, index) => (
          <SidebarItem
            key={val}
            disablePadding
            isActive={
              val.route === location.pathname ||
              (location.pathname.includes(val.route) && val.route !== "/")
            }
            onClick={() => {
              navigate(val.route)
            }}>
            <ListItemIcon>{val.icon}</ListItemIcon>
            <ListItemText
              primary={val.title}
              sx={{ span: { fontSize: (theme) => theme.typography.h4 } }}
            />
          </SidebarItem>
        ))}
      </List>
    </Drawer>
  )
}
