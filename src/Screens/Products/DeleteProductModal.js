import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  OutlinedInput,
  Stack,
  Typography,
  styled
} from "@mui/material"
import React from "react"
import * as Yup from "yup"
import CloseIcon from "@mui/icons-material/Close"
import { useDeleteProductMutation } from "../../Api/Resources/product"
import { updateErrorMessage } from "../../Redux/Slices/common"
import Loader from "../../Components/Loader"
import { useDispatch } from "react-redux"
const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.common.whiteGrey,
  border: "1px solid #000",
  borderRadius: "16px",
  boxShadow: 24,
  padding: "0 16px 16px 16px"
}))

const DeleteProductModal = ({ handleClose, open, productId }) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation()
  const dispatch = useDispatch()
  const deletingProduct = async () => {
    const deleted = await deleteProduct({ id: productId })
    handleClose()
    if (deleted)
      dispatch(
        updateErrorMessage({ message: deleted?.data?.msg, status: "success" })
      )
    if (deleted?.error)
      dispatch(
        updateErrorMessage({
          message: deleted?.error?.data?.msg || "something went wrong",
          status: "error"
        })
      )
  }
  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => {
        handleClose()
      }}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <StyledBox>
        {isLoading ? <Loader /> : ""}
        <Stack direction="row" justifyContent={"space-between"} pt={1}>
          <Typography variant="h5">Delete Product</Typography>
          <IconButton
            onClick={() => {
              handleClose()
            }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Typography variant="h4" textAlign={"center"}>
          Are You sure to Delete this product
        </Typography>
        <Stack direction={"column"} spacing={1} pt={3}>
          <Button color="error" variant="contained" onClick={deletingProduct}>
            Delete
          </Button>
        </Stack>
      </StyledBox>
    </Modal>
  )
}

export default DeleteProductModal
