import React from "react"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteIcon from "@mui/icons-material/DeleteOutline"

const styles = {
  count: {
    "&.Mui-disabled": {
      fontWeight: 600,
      border: "none",
      color: (theme) => "whitegray",
      minWidth: 32,
      fontSize: 14
    }
  },
  icons: {
    color: "black",
    fontSize: 18
  },
  buttonGrp: {
    marginBottom: 2,
    backgroundColor: (theme) => theme.palette.primary.main,
    borderRadius: 12
  },
  actions: {
    minWidth: 28,
    border: "none",
    "&.Mui-disabled": {
      pointerEvents: "auto",
      border: "none",
      cursor: "not-allowed"
    },
    "&:hover": { border: "none" }
  }
}
const QuantityCounter = ({
  decrementCount,
  incrementCount,
  size,
  count = 5
}) => {
  return (
    <ButtonGroup sx={styles.buttonGrp} color="primary" size={size}>
      <Button
        data-id={count > 1 ? "remove-bn" : "delete-bn"}
        size={size}
        onClick={decrementCount}
        sx={styles.actions}
      >
        {count > 1 ? (
          <RemoveIcon sx={styles.icons} />
        ) : (
          <DeleteIcon sx={styles.icons} />
        )}
      </Button>
      <Button data-id="quantity" disabled sx={styles.count}>
        {count}
      </Button>
      <Button
        size={size}
        onClick={incrementCount}
        sx={styles.actions}
        data-id="increase-quantity-btn"
      >
        <AddIcon sx={styles.icons} />
      </Button>
    </ButtonGroup>
  )
}

export default QuantityCounter
