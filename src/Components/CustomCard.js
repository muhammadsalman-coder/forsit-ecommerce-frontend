import { Card } from "@mui/material"
// import { colors } from "../App"

const styles = {
  box: {
    padding: 2,
    borderRadius: 2,
    margin: 1,
    background: "#EFEFEF"
  },
  fullWidth: {
    width: "97%"
  }
}

function CustomCard({ children, rest, fullWidth = false, handleClick }) {
  return (
    <Card
      elevation={0}
      sx={{ ...styles.box, ...(fullWidth ? styles.fullWidth : {}), ...rest }}
      onClick={handleClick}>
      {children}
    </Card>
  )
}

export default CustomCard
