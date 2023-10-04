import api from "../Api"

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    placeOrder: build.mutation({
      query: (data) => ({
        url: "api/placeOrder",
        method: "POST",
        body: {
          ...data
        }
      }),
      invalidatesTags: ["Orders"]
    }),
    updateStatus: build.mutation({
      query: (data) => ({
        url: "api/updateStatus",
        method: "POST",
        body: {
          ...data
        }
      }),
      invalidatesTags: ["Orders"]
    }),
    getOrders: build.query({
      query: () => `/api/getOrders`,
      providesTags: ["Orders"]
    })
  }),
  overrideExisting: false
})

export const {
  usePlaceOrderMutation,
  useUpdateStatusMutation,
  useGetOrdersQuery
} = orderApi
