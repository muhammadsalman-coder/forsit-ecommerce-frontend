import React from "react"
import CartItems from "./CartItem"
import { Divider, Drawer, Grid } from "@mui/material"
import TitleBar from "./TitleBar"
import { useSelector } from "react-redux"
import { getCartState } from "../../Redux/Slices/common"

const styles = {
  title: {
    padding: "0 24px",
    margin: "12px 0px"
  },
  drawer: {
    width: "40vw",
    height: "100%",
    "@media (max-width:1024px)": {
      width: "100vw"
    }
  }
}
const CartDrawer = ({ toggleDrawer, isDrawerOpen }) => {
  const carts = useSelector(getCartState)
  return (
    <Drawer
      open={isDrawerOpen}
      anchor="right"
      onBackdropClick={() => toggleDrawer()}>
      <Grid
        container
        data-id="my-cart"
        direction="column"
        wrap="nowrap"
        sx={styles.drawer}>
        <Grid item sx={styles.title}>
          <TitleBar
            toggleDrawer={toggleDrawer}
            totalCartItems={carts?.length}
          />
        </Grid>
        <Grid container item direction="column" wrap="nowrap">
          <Grid item>
            {carts?.length &&
              carts?.map((cart) => (
                <>
                  <CartItems cartItem={cart} />
                  <Divider />
                </>
              ))}
          </Grid>
        </Grid>
      </Grid>
      {/* <CartItems /> */}
    </Drawer>
  )
}

export default CartDrawer
