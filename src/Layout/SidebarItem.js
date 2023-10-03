import { ListItem } from "@mui/material"
import styled from "styled-components"

export default styled(ListItem)(({ theme, isActive }) =>
  isActive
    ? {
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        color: "#1e2640",
        fontWeight: 600,
        backgroundColor: "#FFF7ED",
        borderRight: `4px solid #FF8A58`
      }
    : {
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        color: "#9EA1A9",
        fontWeight: 600,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.10)"
        }
      }
)
