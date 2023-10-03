/* eslint-disable max-len */
import { isRejectedWithValue } from "@reduxjs/toolkit"
import { updateErrorMessage } from "./Slices/common"

const rtkQueryErrorLogger = (api) => (next) => (action) => {
  if (action?.payload?.status === 400) {
    return next(action)
  } else {
    if (isRejectedWithValue(action)) {
      // console.log("aciton----work", action);
      if (action.payload.data)
        api.dispatch(
          updateErrorMessage({
            type: "error",
            message:
              action.payload?.data?.message || action.payload?.data?.FORM_ERROR
          })
        )
    }
  }
  return next(action)
}

export default rtkQueryErrorLogger
