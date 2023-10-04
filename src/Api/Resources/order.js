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
      invalidatesTags: ["Orders", "Order"]
    }),
    getOrders: build.query({
      query: () => `/api/getOrders`,
      providesTags: ["Orders"]
    }),
    getOrder: build.query({
      query: (id) => `/api/getOrder?id=${id}`,
      providesTags: ["Order"]
    }),
    getStats: build.query({
      query: () => `/api/getStats`
    })
  }),
  overrideExisting: false
})

export const {
  usePlaceOrderMutation,
  useUpdateStatusMutation,
  useGetOrdersQuery,
  useGetOrderQuery,
  useGetStatsQuery
} = orderApi
