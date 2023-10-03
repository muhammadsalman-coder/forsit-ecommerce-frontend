import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import { Button, IconButton, Stack } from "@mui/material"
const OrderAction = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <IconButton aria-label="delete" size="large" color="error">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      {/* <IconButton aria-label="edit" size="large" color="success">
        <EditIcon fontSize="inherit" />
      </IconButton> */}
      <Button
        variant="outlined"
        color="error"
        sx={{
          padding: "5px 24px",
          borderRadius: 32
        }}>
        Cancel
      </Button>
      <Button
        variant="outlined"
        color="success"
        sx={{
          padding: "5px 24px",
          borderRadius: 32
        }}>
        Confirm
      </Button>
    </Stack>
  )
}

export default OrderAction
