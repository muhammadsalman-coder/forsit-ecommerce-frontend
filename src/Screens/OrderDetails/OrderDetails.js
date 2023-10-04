import { Box, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import styled from "styled-components"
import { colors } from "../../App"

import OrderAction from "./OrderAction"
import HeadItem from "../../Components/HeadItem"
import ReceiptIcon from "@mui/icons-material/Receipt"
import ProfileAttribute from "../../Components/ProfileAttribute"
import OrderChip, { OrderStatusMapped } from "../Orders/OrderChip"
import { getDateAndTime } from "../../utils/DateHelper"
import OrderItems from "../Orders/OrderItems"
import CustomCard from "../../Components/CustomCard"
import ListElement from "../../Components/ListElement"
import { useParams } from "react-router-dom"
import {
  useGetOrderQuery,
  useUpdateStatusMutation
} from "../../Api/Resources/order"
import Loader from "../../Components/Loader"
const StyledBox = styled(Box)(({ theme }) => ({
  background: colors.whiteGrey,
  width: "100%",
  padding: "20px",
  borderRadius: "8px"
}))

const OrderDetails = () => {
  const { id } = useParams()
  const { currentData: order, isLoading, isFetching } = useGetOrderQuery(id)
  const [updateStatus, { isLoading: updateStatusLoading }] =
    useUpdateStatusMutation()
  const onCancel = async () =>
    await updateStatus({ id, status: OrderStatusMapped.Cancelled })
  const onDelivered = async () =>
    await updateStatus({ id, status: OrderStatusMapped.Delivered })
  return (
    <Stack p={4}>
      {(isLoading || isFetching || updateStatusLoading) && <Loader />}
      <StyledBox>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h2" color="gray" fontWeight={600}>
              {order?.orderNumber}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <OrderAction
                onCancel={onCancel}
                onDelivered={onDelivered}
                orderStatus={order?.orderStatus}
              />
            </Stack>
          </Grid>
        </Grid>
        <HeadItem
          icon={<ReceiptIcon sx={{ color: "dimgray" }} />}
          title={"Order Information"}
        />
        <ProfileAttribute
          name={"Order Received at"}
          value={getDateAndTime(order?.createdAt)}
        />
        <ProfileAttribute
          name={"Total Ordered Products"}
          value={order?.quantity}
        />
        <ProfileAttribute
          name={"Order Status"}
          valueComp={<OrderChip status={order?.orderStatus} />}
        />
      </StyledBox>

      <Grid container>
        <Grid item xs pt={1}>
          <OrderItems items={order?.orderedProducts} />
        </Grid>
        <Grid item xs={4}>
          <CustomCard>
            <ListElement label={"Total Amount"} value={order?.totalAmount} />
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default OrderDetails
