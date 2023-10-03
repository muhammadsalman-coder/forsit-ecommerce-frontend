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
    })
    // placeOrder: build.query({
    //   query: () => `/api/placeOrder`,
    //   providesTags: ["user"],
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     let user = await queryFulfilled
    //     if (user?.data) {
    //       dispatch(updateUser(user.data))
    //     } else {
    //       dispatch(updateUser(null))
    //     }
    //   }
    // }),
    // getAppUsers: build.query({
    //   query: (data) => {
    //     let qs = queryString.stringify(data)
    //     return `/api/getappusers?${qs}`
    //   },
    //   providesTags: ["GetUsers"]
    // }),
    // getAdminUsers: build.query({
    //   query: (data) => {
    //     let qs = queryString.stringify({ ...data })
    //     return `/api/getadminusers?${qs}`
    //   },
    //   providesTags: ["GetUsers"]
    // }),
    // updateUser: build.mutation({
    //   query: (data) => ({
    //     url: "api/updateuser",
    //     method: "POST",
    //     body: {
    //       ...data
    //     }
    //   }),
    //   invalidatesTags: ["GetUsers"]
    // })
    // updateUser: build.mutation<any, any>({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
    //     try {
    //       const signinResponse: any = await fetchWithBQ({
    //         url: "api/updateuser",
    //         method: "POST",
    //         body: _arg,
    //       });
    //       return {
    //         data: signinResponse.data,
    //       };
    //     } catch (error: any) {
    //       return error.status
    //         ? { error }
    //         : { error: { status: 400, data: error } };
    //     }
    //   },
    // }),
  }),
  overrideExisting: false
})

export const { usePlaceOrderMutation } = orderApi
