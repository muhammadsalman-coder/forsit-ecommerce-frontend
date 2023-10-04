import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/DeleteOutline"

import QuantityCounter from "./QuantityCounter"
import { getDisplayPrice } from "../Orders/Orders"
import { useDispatch } from "react-redux"
import { addUpdateToCart, removeFromCart } from "../../Redux/Slices/common"

const styles = {
  cartItem: {
    padding: "56px 0",
    height: 100
  },
  cartItemBatch: {
    height: "auto",
    padding: "20px 0px",
    alignItems: "flex-start"
  },
  image: {
    width: "100%",
    height: 80,
    marginRight: 12,
    objectFit: "contain",
    cursor: "pointer"
  },
  title: {
    fontSize: 14,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical"
  },
  icons: {
    color: (theme) => theme.palette.common.lightgrey,
    marginRight: 4,
    fontSize: 20
  },
  titleContiner: {
    height: "100%",
    "@media (max-width:800px)": {
      height: "auto"
    },
    cursor: "pointer"
  },
  deleteText: {
    color: (theme) => theme.palette.common.lightgray,
    fontSize: 12,
    textTransform: "none"
  },
  price: { fontWeight: "bold", fontSize: 14 },
  selectedOptions: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 10,
    padding: "0px 4px",
    width: 120
  },
  preOrderLabel: {
    color: (theme) => theme.palette.secondary.main,
    fontSize: 12
  },
  removeBtn: {
    padding: "6px 0px",
    "&:hover": {
      color: (theme) => theme.palette.secondary.main,
      backgroundColor: (theme) => theme.palette.common.whitegray,
      "@media (hover: hover)": {
        color: (theme) => theme.palette.secondary.main,
        backgroundColor: (theme) => theme.palette.common.whitegray
      }
    }
  },
  digitalProduct: {
    width: 16,
    height: 12,
    margin: "4px 8px"
  }
}

function CartItems({ hideImages = false, cartItem, key }) {
  const dispatch = useDispatch()

  const decrementCount = () => {
    if (+cartItem?.quantity === 1) {
      dispatch(removeFromCart({ ...cartItem }))
      return
    }

    dispatch(
      addUpdateToCart({
        ...cartItem,
        quantity: cartItem?.quantity ? +cartItem?.quantity - 1 : 0
      })
    )
  }
  const incrementCount = () => {
    dispatch(
      addUpdateToCart({
        ...cartItem,
        quantity: cartItem?.quantity ? +cartItem?.quantity + 1 : 0
      })
    )
  }
  return (
    <Grid
      container
      key={key}
      wrap="nowrap"
      justifyContent="space-between"
      alignItems="center"
      sx={styles.cartItem}>
      {hideImages ? (
        <></>
      ) : (
        <Grid item xs={3} sm={2} md={2}>
          <img
            style={styles.image}
            alt={cartItem?.name}
            src={cartItem?.image}
          />
        </Grid>
      )}
      <Grid
        container
        item
        xs={hideImages ? 12 : 8.5}
        sm={hideImages ? 12 : 9.5}
        alignItems="center"
        justifyContent="space-between">
        <Grid
          container
          xs={12}
          md={5}
          item
          direction="column"
          sx={styles.titleContiner}>
          <Grid item>
            <Grid container>
              <Typography data-id="product-title" sx={styles.title}>
                {cartItem?.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Button
              sx={styles.removeBtn}
              data-id="remove-product-btn"
              onClick={() => dispatch(removeFromCart({ ...cartItem }))}>
              <DeleteIcon sx={styles.icons} />
              <Typography sx={styles.deleteText}>Remove</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={5} md={4}>
          <QuantityCounter
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            count={cartItem?.quantity}
          />
        </Grid>
        <Grid data-id="product-amount-btn" item xs={5} md={3}>
          <Typography sx={styles.price}>
            {getDisplayPrice(
              (cartItem?.quantity * cartItem?.price).toFixed(0) || 0
            )}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CartItems
