import { createSlice } from "@reduxjs/toolkit"

const initialState = { snackBar: null, alert: null, cart: [] }

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    updateErrorMessage(state, action) {
      state.snackBar = action.payload
    },
    updateAlertMessage(state, action) {
      state.alert = action.payload
    },
    addUpdateToCart(state, action) {
      if (
        state.cart?.length &&
        state.cart?.find((prod) => prod?.id === action.payload?.id)
      ) {
        state.cart = state.cart.map((prod) => {
          if (prod.id === action.payload?.id) return action.payload

          return prod
        })
      } else {
        state.cart = [...state.cart, action.payload]
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((prod) => prod.id !== action.payload?.id)
    }
  }
})

export const commonReducer = commonSlice.reducer
export const {
  updateErrorMessage,
  updateAlertMessage,
  addUpdateToCart,
  removeFromCart
} = commonSlice.actions
export const getCartState = (state) => state?.commonSlice?.cart
