import { createSlice } from "@reduxjs/toolkit"

const initialState = { snackBar: null, alert: null }

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    updateErrorMessage(state, action) {
      state.snackBar = action.payload
    },
    updateAlertMessage(state, action) {
      state.alert = action.payload
    }
  }
})

export const commonReducer = commonSlice.reducer
export const { updateErrorMessage, updateAlertMessage } = commonSlice.actions
