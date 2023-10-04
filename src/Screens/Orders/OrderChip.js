import { Chip } from "@mui/material"

const OrderStatusColors = {
  Received: "#f79a3c",
  Delivered: "#00A86B",
  Cancelled: "#F55353"
}
export const OrderStatusMapped = {
  Received: "Received",
  Delivered: "Delivered",
  Cancelled: "Cancelled"
}
const styles = {
  color: (theme) => theme.palette.common.white,
  width: 120
}

function OrderChip({ status }) {
  return (
    <Chip
      sx={styles}
      size="small"
      style={{
        backgroundColor: OrderStatusColors[status]
      }}
      label={OrderStatusMapped[status]}
    />
  )
}

export default OrderChip
