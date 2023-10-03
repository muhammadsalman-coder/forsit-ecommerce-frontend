import React from "react"
import { Snackbar, Alert } from "@mui/material"
import { updateErrorMessage } from "../Redux/Slices/common"
import { useDispatch, useSelector } from "react-redux"

const SnackBar = () => {
  const snackBar = useSelector((state) => state.commonSlice.snackBar)
  const dispatch = useDispatch()

  if (!snackBar || !snackBar.message) {
    return null
  }

  const handleSnackbarClose = () => {
    dispatch(updateErrorMessage(undefined))
  }

  return (
    <Snackbar
      open
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={handleSnackbarClose}>
      <Alert
        color={snackBar.type}
        onClose={handleSnackbarClose}
        variant="filled"
        severity={snackBar.type}>
        {snackBar.message}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
