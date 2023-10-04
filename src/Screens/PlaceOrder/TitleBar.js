import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Close from "@mui/icons-material/Close"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import React from "react"

const styles = {
  cartIcon: {
    marginRight: 8
  },
  cartText: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: 16
  },
  cartIconImg: {
    color: (theme) => theme.palette.primary.main
  }
}

function TitleBar({ toggleDrawer, totalCartItems }) {
  return (
    <Grid
      container
      wrap="nowrap"
      justifyContent="space-between"
      alignItems="center">
      <Grid container item alignItems="center" xs={6}>
        <Grid item sx={styles.cartIcon}>
          <ShoppingCartOutlined sx={styles.cartIconImg} />
        </Grid>
        <Grid item>
          <Typography variant="caption" sx={styles.cartText}>
            Your Cart
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Typography>Total items: {totalCartItems}</Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={() => toggleDrawer()} size="large">
          <Close />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default TitleBar
