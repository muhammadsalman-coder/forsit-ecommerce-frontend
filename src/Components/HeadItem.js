import { Grid } from "@mui/material"

const styles = {
  fontWeight: "bold",
  fontSize: 20,
  marginLeft: 1,
  color: "dimgray"
}

function HeadItem({ icon, title, classes }) {
  return (
    <Grid container alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item sx={styles}>
        {title}
      </Grid>
    </Grid>
  )
}

export default HeadItem
