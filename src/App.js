import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"
import Dashboard from "./Screens/Dashboard/Dashboard"
import Orders from "./Screens/Orders/Orders"
import OrderDetails from "./Screens/OrderDetails/OrderDetails"
import Products from "./Screens/Products/Products"
import SnackBar from "./Components/SnackBar"
import { Provider } from "react-redux"
import { store } from "./Redux/store"
import PlaceOrder from "./Screens/PlaceOrder/PlaceOrder"

const fontSizes = {
  size1: "2.25rem",
  size2: "1.5rem",
  size3: "1.25rem",
  size4: "1rem",
  size5: "0.875rem",
  size6: "0.75rem",
  size7: "0.625rem"
}
export const colors = {
  white: "#FFFFFF",
  whiteGrey: "#EFEFEF",
  lightgrey: "#969696"
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEB05A",
      contrastText: "#fff"
    },
    secondary: {
      main: "#1e2640"
    },
    errorBar: {
      border: "#FF4D4E",
      color: "#FF4D4E"
    },
    border: {
      color: grey[100]
    },
    common: {
      white: "#FFFFFF",
      whiteGrey: "#EFEFEF",
      lightgrey: "#969696",
      tint: "#FFF7ED"
    }
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontSize: `${fontSizes.size1} !important`,
      fontWeight: "400"
    },
    h2: {
      fontSize: `${fontSizes.size2} !important`,
      fontWeight: "700"
    },
    h3: {
      fontSize: `${fontSizes.size3} !important`,
      fontWeight: "700"
    },
    h4: {
      fontSize: `${fontSizes.size4} !important`,
      fontWeight: "700"
    },
    h5: {
      fontSize: `${fontSizes.size5} !important`,
      fontWeight: "700"
    },
    h6: {
      fontSize: fontSizes.size6,
      fontWeight: "400"
    },
    body1: {
      fontSize: fontSizes.size6,
      fontWeight: "400"
    },
    body2: {
      fontSize: fontSizes.size7
    },
    button: {
      fontSize: fontSizes.size5,
      fontWeight: "500"
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
