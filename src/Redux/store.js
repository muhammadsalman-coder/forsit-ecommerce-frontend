import { combineReducers, configureStore } from "@reduxjs/toolkit"
import api, { MAIN_API_REDUCER_KEY } from "../Api/Api"
import rtkQueryErrorLogger from "./rtkQueryLogger"
import { commonReducer, commonSlice } from "./Slices/common"

const reducers = {
  [MAIN_API_REDUCER_KEY]: api.reducer,
  [commonSlice.name]: commonReducer
}

const combinedReducer = combineReducers(reducers)

export const rootReducer = (state, action) => combinedReducer(state, action)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      rtkQueryErrorLogger,
      api.middleware
    ])
})
