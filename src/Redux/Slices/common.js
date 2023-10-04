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
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }]
      }
    },
    removeFromCart(state, action) {
      const cards = state.cart.filter((prod) => prod.id !== action.payload?.id)

      state.cart = [...cards]
      console.log("state.cart111", state.cart)
    },
    clearCart(state, action) {
      state.cart = []
    }
  }
})

export const commonReducer = commonSlice.reducer
export const {
  updateErrorMessage,
  updateAlertMessage,
  addUpdateToCart,
  removeFromCart,
  clearCart
} = commonSlice.actions
export const getCartState = (state) => state?.commonSlice?.cart
