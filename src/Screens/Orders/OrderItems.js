import { Grid, Typography } from "@mui/material"
import OrderItem from "./OrderItem"

const styles = {
  headerText: {
    fontWeight: "bold",
    fontSize: 14,
    color: (theme) => theme.palette.common.lightgrey
  },
  barTitle: {
    backgroundColor: (theme) => theme.palette.common.tint,
    padding: "12px 24px"
  }
}

function OrderItems({ items, merchantBvid }) {
  return (
    <>
      <Grid container item sx={styles.barTitle}>
        <Grid item xs={6}>
          <Typography sx={styles.headerText}>Product Name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center" sx={styles.headerText}>
            Price
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center" sx={styles.headerText}>
            Qty
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography align="center" sx={styles.headerText}>
            Amount
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center">
        {items?.length &&
          items.map((item, index) => (
            <Grid item key={index} xs={12}>
              <Grid className="printHandler">
                <OrderItem item={item} merchantBvid={merchantBvid} />
              </Grid>
            </Grid>
          ))}
      </Grid>
    </>
  )
}
export default OrderItems
