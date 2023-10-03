import { Grid, Typography } from "@mui/material"
import { getDisplayPrice } from "./Orders"

const styles = {
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: (theme) => theme.palette.common.lightgrey
  },
  media: {
    height: 60,
    width: 60
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1
  },
  boldLabel: {
    fontWeight: "bold"
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "dimgray"
  },
  productName: {
    padding: "4px 4px 4px 16px"
  },
  selectedOptions: {
    fontSize: 12
  }
}

function OrderItem({ item }) {
  const getTotalAmount = () => getDisplayPrice(item.price * item.quantity)
  return (
    <Grid
      container
      sx={styles.item}
      alignItems="center"
      justifyContent="space-between">
      <Grid container item md={6}>
        {item.image && (
          <Grid container item md={2} xs={3}>
            <img src={item.image} style={styles.media} alt={item.name} />
          </Grid>
        )}
        <Grid container item xs={9} alignItems="center" sx={styles.productName}>
          <Grid container item xs={12} direction="column">
            <Typography sx={styles.label}>{item.name}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Typography sx={styles.label}>{getDisplayPrice(item.price)}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography sx={styles.label}>{item.quantity}</Typography>
      </Grid>
      <Grid item md={2} xs={12} sx={styles.boldLabel}>
        <Typography sx={styles.price}>{getTotalAmount()}</Typography>
      </Grid>
    </Grid>
  )
}

export default OrderItem
