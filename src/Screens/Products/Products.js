import {
  Button,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import React, { useState } from "react"
import ProductCard from "../../Components/ProductCard"
import AddEditProductModal from "./AddEditProductModal"
import {
  useCreateProductMutation,
  useGetProductsQuery
} from "../../Api/Resources/product"
import Loader from "../../Components/Loader"
import { updateErrorMessage } from "../../Redux/Slices/common"
import { useDispatch } from "react-redux"

const Products = () => {
  const dispatch = useDispatch()
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)
  const toggleProductModal = () => setIsAddProductModalOpen((prev) => !prev)
  const [createProduct, { isLoading: createProductLoading }] =
    useCreateProductMutation()
  const { currentData: products, isLoading, isFetching } = useGetProductsQuery()
  const loading = isLoading || isFetching

  const creatingProduct = async (values) => {
    try {
      const res = await createProduct(values)
      dispatch(updateErrorMessage({ message: res?.data?.msg, type: "success" }))
      toggleProductModal()

      if (res?.error)
        dispatch(
          updateErrorMessage({
            message: res?.error?.data?.msg || "something went wrong",
            type: "error"
          })
        )
    } catch (err) {
      console.log("error", err)
    }
  }
  return (
    <>
      {loading ? <Loader /> : ""}
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}>
          <Typography variant="h2" color="gray" fontWeight={600}>
            Products
          </Typography>
          <Button variant="contained" onClick={toggleProductModal}>
            Add New Product
          </Button>
        </Stack>
      </Toolbar>
      <Divider />
      <Grid container>
        {products?.length &&
          products.map((prod, index) => (
            <ProductCard product={prod} index={index} />
          ))}
      </Grid>
      <AddEditProductModal
        open={isAddProductModalOpen}
        handleClose={toggleProductModal}
        onSubmit={creatingProduct}
        isLoading={createProductLoading}
      />
    </>
  )
}

export default Products
