import React, { useState } from "react"
import { Card, Grid, IconButton, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { getDisplayPrice } from "../Screens/Orders/Orders"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useUpdateproductMutation } from "../Api/Resources/product"
import AddEditProductModal from "../Screens/Products/AddEditProductModal"
import { updateErrorMessage } from "../Redux/Slices/common"
import { useDispatch } from "react-redux"
import DeleteProductModal from "../Screens/Products/DeleteProductModal"
const styles = {
  media: {
    borderRadius: 10,
    opacity: 1,
    width: "100%",
    height: 72,
    objectFit: "contain"
  },
  subtitle: {
    fontSize: 15,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "11rem",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical"
  },
  gridContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // gap: "5px",
    padding: "12px 12px 4px"
  },
  subtitleDiv: {
    height: 43
  },
  productImageContainer: {
    padding: "8px 4px",
    position: "relative"
  },
  card: {
    margin: 1,
    padding: 2,
    borderRadius: 4,
    background: (theme) => theme.palette.common.whiteGrey
  },
  imageGrid: {
    margin: "16px auto"
  }
}

function ProductCard({ product, index }) {
  const [isDeleteProductOpen, setIsDeleteProductOpen] = useState(false)
  const toggleDeleteModal = () => setIsDeleteProductOpen((prev) => !prev)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const toggleEditModal = () => setIsEditProductOpen((prev) => !prev)
  const [updaateProduct, { isLoading }] = useUpdateproductMutation()
  const dispatch = useDispatch()
  const updatingProduct = async (values) => {
    try {
      const res = await updaateProduct(values)
      dispatch(updateErrorMessage({ message: res?.data?.msg, type: "success" }))
      toggleEditModal()
      if (res?.error)
        dispatch(
          updateErrorMessage({
            message: res?.error?.data?.msg || "something went wrong",
            type: "error"
          })
        )
    } catch (err) {
      updateErrorMessage({ message: "something went wrong", type: "error" })
      console.log("error", err)
    }
  }
  return (
    <Grid item md={4} xs={6} key={index}>
      <Card elevation={0} sx={styles.card}>
        <Grid container wrap="nowrap" sx={styles.productImageContainer}>
          <Grid
            item
            xs={1}
            container
            alignItems="center"
            justifyContent="center"
            direction="row-reverse">
            <IconButton onClick={toggleEditModal}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={toggleDeleteModal}>
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid container item xs={10}>
            <Grid
              container
              sx={styles.imageGrid}
              xs={2}
              item
              justifyContent="center">
              <img style={styles.media} src={product.image} alt="img" />
            </Grid>
            <Grid container item xs={8} sx={styles.gridContent}>
              <Stack sx={styles.subtitleDiv}>
                <Typography
                  variant="body2"
                  sx={styles.subtitle}
                  color="textSecondary">
                  {product.name}
                </Typography>
              </Stack>
              {getDisplayPrice(product?.price)}
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <AddEditProductModal
        open={isEditProductOpen}
        handleClose={toggleEditModal}
        onSubmit={updatingProduct}
        product={product}
        isEditing
        isLoading={isLoading}
      />
      <DeleteProductModal
        open={isDeleteProductOpen}
        handleClose={toggleDeleteModal}
        productId={product?.id}
      />
    </Grid>
  )
}

export default ProductCard
