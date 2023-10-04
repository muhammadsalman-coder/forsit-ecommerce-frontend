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
import { useFormik } from "formik"
import { useCreateProductMutation } from "../../Api/Resources/product"
import { updateErrorMessage } from "../../Redux/Slices/common"
import Loader from "../../Components/Loader"
// import * as YUP from "yup"
// import { useFormik } from "formik"
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

const StyledButton = styled(Button)(({ bgColor, textColor, border }) => ({
  borderRadius: "15px",
  ...(border && { border: `1px solid ${border}` }),
  backgroundColor: bgColor,
  fontWeight: 600,
  color: textColor,
  "&:hover": {
    backgroundColor: bgColor,
    color: textColor,
    opacity: 0.75
  }
}))
const OutlinedInputStyled = styled(OutlinedInput)(() => ({
  background: "#fff",
  borderRadius: "15px",
  "& input": {
    padding: "8px 20px"
  }
}))

const addProductSchema = {
  name: Yup.string().required("field is required"),
  price: Yup.number().required("field is required"),
  image: Yup.string().required("field is required")
}
const initialValue = {
  name: "",
  price: "",
  image: ""
}
const AddEditProductModal = ({
  handleClose,
  open,
  product = initialValue,
  onSubmit,
  isEditing,
  isLoading
}) => {
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
    resetForm,
    setFieldTouched
  } = useFormik({
    initialValues: product,
    enableReinitialize: true,
    validationSchema: Yup.object().shape(addProductSchema),
    onSubmit: async (values) => {
      await onSubmit(values)
      resetForm()
    }
  })
  console.log("product", product)
  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setFieldValue("productImage", file)
    setFileToBase(file)
  }
  const setFileToBase = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log("reader.result", reader.result)
      setFieldValue("image", reader.result)
      setFieldTouched("image", false)
    }
  }
  return (
    <Modal
      keepMounted
      open={open}
      onClose={() => {
        handleClose()
        resetForm()
      }}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <StyledBox>
        {isLoading ? <Loader /> : ""}
        <Stack direction="row" justifyContent={"space-between"} pt={1}>
          <Typography variant="h5">Add New Product</Typography>
          <IconButton
            onClick={() => {
              handleClose()
              resetForm()
            }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack direction={"column"} spacing={1} pt={3}>
          <FormControl sx={{ mt: 1 }} variant="outlined">
            <OutlinedInputStyled
              placeholder="Enter product name"
              value={values?.name}
              onChange={handleChange}
              name="name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <FormHelperText error={touched.name && Boolean(errors.name)}>
              {touched.name && errors.name}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ my: 1 }} variant="outlined">
            <OutlinedInputStyled
              placeholder="Price"
              name="price"
              type="text"
              value={values.price}
              onChange={handleChange}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
            />
            <FormHelperText error={touched.price && Boolean(errors.price)}>
              {touched.price && errors.price}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel htmlFor="image-input">Image</FormLabel>
            <OutlinedInput
              id="image-input"
              autoComplete={"off"}
              name="image"
              type="file"
              onChange={handleImage}
              fullWidth
              error={touched.image && Boolean(errors.image)}
              helperText={touched.image && errors.image}
            />
            <FormHelperText error={touched.image && Boolean(errors.image)}>
              {touched.image && errors.image}
            </FormHelperText>
          </FormControl>
          <Stack direction={"row"} justifyContent="center">
            {values?.image && (
              <img
                src={values?.image}
                style={{ width: "auto", height: "150px" }}
                alt="img"
              />
            )}
          </Stack>

          <StyledButton
            variant="contained"
            bgColor="#fff"
            textColor="#000"
            fullWidth
            onClick={handleSubmit}>
            {isEditing ? "Edit Product" : "Create Product"}
          </StyledButton>
        </Stack>
      </StyledBox>
    </Modal>
  )
}

export default AddEditProductModal
