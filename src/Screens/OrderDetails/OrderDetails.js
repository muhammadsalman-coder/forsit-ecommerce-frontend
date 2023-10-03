import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import styled from "styled-components"
import { colors } from "../../App"

import OrderAction from "./OrderAction"
import HeadItem from "../../Components/HeadItem"
import ReceiptIcon from "@mui/icons-material/Receipt"
import ProfileAttribute from "../../Components/ProfileAttribute"
import OrderChip from "../Orders/OrderChip"
import { getDateAndTime } from "../../utils/DateHelper"
import OrderItems from "../Orders/OrderItems"
import CustomCard from "../../Components/CustomCard"
import ListElement from "../../Components/ListElement"
const StyledBox = styled(Box)(({ theme }) => ({
  background: colors.whiteGrey,
  width: "100%",
  padding: "20px",
  borderRadius: "8px"
}))

const order = [
  {
    productId: "12312312312",
    quantity: 1,
    price: 910,
    name: "sdfasf",
    image:
      "https://imagedelivery.net/EtcVECyqIuOr1FjP12iTCg/a5b15df8-cdab-4af3-3ed8-4251d6ebb100/w=300"
  }
]
const OrderDetails = () => {
  return (
    <Stack p={4}>
      <StyledBox>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h2" color="gray" fontWeight={600}>
              Order: 2321-AHDZ
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <OrderAction />
            </Stack>
          </Grid>
        </Grid>
        <HeadItem
          icon={<ReceiptIcon sx={{ color: "dimgray" }} />}
          title={"Order Information"}
        />
        <ProfileAttribute
          name={"Order Received at"}
          value={getDateAndTime("2016-05-18T16:00:00Z")}
        />
        <ProfileAttribute
          name={"Order Status"}
          valueComp={<OrderChip status={"Cancelled"} />}
        />
      </StyledBox>

      <Grid container>
        <Grid item xs pt={1}>
          <OrderItems items={order} />
        </Grid>
        <Grid item xs={4}>
          <CustomCard>
            <ListElement label={"Total Amount"} value={210} />
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default OrderDetails
