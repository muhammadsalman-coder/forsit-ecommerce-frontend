import { Grid, Typography } from "@mui/material"

const styles = {
  key: {
    fontSize: 14,
    color: (theme) => theme.palette.common.lightgrey
  },
  caption: {
    fontSize: 16,
    fontWeight: "bold"
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
    color: "dimgray"
  }
}

function ListElement({ label, value, bold = false }) {
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Typography
          sx={{ ...styles.key, ...(bold ? styles.bold : {}) }}
          variant="caption">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="caption"
          sx={{ ...styles.caption, ...(bold ? styles.bold : {}) }}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  )
}
export default ListElement
