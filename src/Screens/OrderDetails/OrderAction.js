import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import { Button, IconButton, Stack } from "@mui/material"
import { useUpdateStatusMutation } from "../../Api/Resources/order"
import { OrderStatusMapped } from "../Orders/OrderChip"
const OrderAction = ({ orderStatus, onDelivered, onCancel }) => {
  return (
    <Stack direction={"row"} spacing={2}>
      {orderStatus === OrderStatusMapped.Received ? (
        <>
          <Button
            variant="outlined"
            color="error"
            sx={{
              padding: "5px 24px",
              borderRadius: 32
            }}
            onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="success"
            sx={{
              padding: "5px 24px",
              borderRadius: 32
            }}
            onClick={onDelivered}>
            Confirm
          </Button>
        </>
      ) : (
        <></>
      )}

      {orderStatus === OrderStatusMapped.Delivered ? (
        <Button
          variant="contained"
          disabled
          sx={{
            padding: "5px 24px",
            borderRadius: 32,
            background: (theme) => `${theme.palette.success.light}!important`,
            color: (theme) => `${theme.palette.common.whiteGrey}!important`
          }}>
          {OrderStatusMapped.Delivered}
        </Button>
      ) : (
        <></>
      )}
      {orderStatus === OrderStatusMapped.Cancelled ? (
        <Button
          variant="contained"
          disabled
          sx={{
            padding: "5px 24px",
            borderRadius: 32,
            background: (theme) => `${theme.palette.error.light}!important`,
            color: (theme) => `${theme.palette.common.whiteGrey}!important`
          }}>
          {OrderStatusMapped.Cancelled}
        </Button>
      ) : (
        <></>
      )}
    </Stack>
  )
}

export default OrderAction
