import { Button, Card, Divider, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { getDisplayPrice } from "../Screens/Orders/Orders"

const styles = {
  media: {
    borderRadius: 10,
    opacity: 1,
    width: "100%",
    height: 150,
    objectFit: "contain"
  },
  card: {
    margin: 1,
    padding: 2,
    borderRadius: 4,
    background: (theme) => theme.palette.common.whiteGrey
  },
  productImageContainer: {
    padding: "8px 4px"
  },
  subtitle: {
    fontSize: 15,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "11rem",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical"
  },
  subtitleDiv: {
    height: 43
  }
}

const OrderProductCard = ({ product }) => {
  return (
    <>
      <Grid item md={3} xs={6}>
        <Card elevation={0} sx={styles.card}>
          <Grid container sx={styles.productImageContainer}>
            <img style={styles.media} src={product?.image} alt="img" />
            <Divider sx={{ my: 1 }} />
            <Stack sx={styles.subtitleDiv} mt={2}>
              <Typography variant="h4" sx={styles.subtitle}>
                {product?.name}
              </Typography>
            </Stack>
            <Stack width={"100%"} mt={2}>
              <Typography>Stock: {product?.quantity}</Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}>
              <Typography>{getDisplayPrice(product?.price)}</Typography>
              <Button variant="outlined">Add Cart</Button>
            </Stack>
          </Grid>
        </Card>
      </Grid>
    </>
  )
}

export default OrderProductCard
