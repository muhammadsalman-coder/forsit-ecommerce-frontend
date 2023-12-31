import React, { useState } from "react"
import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Divider, Grid, Stack, Toolbar, Typography } from "@mui/material"
import OrderProductCard from "../../Components/OrderProductCard"
import { useGetProductsQuery } from "../../Api/Resources/product"
import Loader from "../../Components/Loader"
import CartDrawer from "./CartDrawer"
import { getCartState } from "../../Redux/Slices/common"
import { useSelector } from "react-redux"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.common.whitegray}`,
    padding: "0 4px"
  }
}))

const PlaceOrder = () => {
  const { currentData: products, isLoading, isFetching } = useGetProductsQuery()
  const loading = isLoading || isFetching
  const carts = useSelector(getCartState)

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState()
  const toggleDrawer = () => {
    setIsCartDrawerOpen((prev) => !prev)
  }
  return (
    <>
      {loading ? <Loader /> : ""}
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography variant="h2" color="gray" fontWeight={600}>
            Place Dummy Orders
          </Typography>
          <IconButton aria-label="cart" color="primary">
            <StyledBadge
              badgeContent={carts?.length}
              color="secondary"
              onClick={toggleDrawer}
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Stack>
      </Toolbar>
      <Divider />

      <Grid container>
        {products?.map((product) => (
          <OrderProductCard product={product} />
        ))}
      </Grid>

      <CartDrawer isDrawerOpen={isCartDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default PlaceOrder
