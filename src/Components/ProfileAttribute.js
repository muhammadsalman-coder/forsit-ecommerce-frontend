import { Grid, Typography } from "@mui/material"

const styles = {
  text: {
    fontSize: 12,
    color: (theme) => theme.palette.common.lightgrey,
    marginTop: 1
  },
  value: {
    fontSize: 15,
    fontWeight: 600
  }
}
function ProfileAttribute({ name, value, valueComp }) {
  return (
    <Grid container item direction="column">
      <Typography sx={styles.text} variant="caption">
        {name}
      </Typography>
      <Grid item>
        {valueComp ? (
          valueComp
        ) : (
          <Typography variant="body1" sx={styles.value}>
            {value}
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default ProfileAttribute
