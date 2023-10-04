import React from "react"
import CartItems from "./CartItem"
import { Button, Divider, Drawer, Grid, Stack, Typography } from "@mui/material"
import TitleBar from "./TitleBar"
import { useDispatch, useSelector } from "react-redux"
import {
  clearCart,
  getCartState,
  updateErrorMessage
} from "../../Redux/Slices/common"
import { getDisplayPrice } from "../Orders/Orders"
import { usePlaceOrderMutation } from "../../Api/Resources/order"
import Loader from "../../Components/Loader"
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
  const dispatch = useDispatch()
  const [placeOrder, { isLoading }] = usePlaceOrderMutation()
  const totalAmount = carts.reduce(
    (acc, cart) => acc + +cart?.price * +cart?.quantity,
    0
  )

  const placingOrder = async () => {
    const mappedOrderedProducts = carts.map((product) => ({
      productId: product?.id,
      quantity: product?.quantity,
      price: product?.price,
      image: product?.image,
      name: product?.name
    }))
    const res = await placeOrder({
      quantity: carts?.length,
      orderedProducts: mappedOrderedProducts
    })
    if (res?.error?.data?.msg)
      dispatch(
        updateErrorMessage({
          message: res?.error?.data?.msg || "something went wrong",
          status: "error"
        })
      )
    if (res?.data?.msg)
      dispatch(
        updateErrorMessage({
          message: res?.data?.msg || "something went wrong",
          status: "error"
        })
      )
    // clearing cart
    toggleDrawer()
    dispatch(clearCart())
  }
  return (
    <Drawer
      open={isDrawerOpen}
      anchor="right"
      onBackdropClick={() => toggleDrawer()}>
      {isLoading ? <Loader /> : ""}
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
            {carts?.length ? (
              carts?.map((cart) => (
                <>
                  <CartItems cartItem={cart} />
                  <Divider />
                </>
              ))
            ) : (
              <Stack
                height={"100%"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Typography variant="h4">Cart is Empty</Typography>
              </Stack>
            )}
            <Stack
              my={4}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}>
              <Typography variant="h4">
                Total Amount: {getDisplayPrice(totalAmount, true)}
              </Typography>

              <Button variant="contained" sx={{ mt: 2 }} onClick={placingOrder}>
                Place Order
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      {/* <CartItems /> */}
    </Drawer>
  )
}

export default CartDrawer
