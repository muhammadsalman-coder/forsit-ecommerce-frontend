import api from "../Api"

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => {
        console.log("data", data)
        var bodyFormData = new FormData()
        bodyFormData.append("name", data?.name)
        bodyFormData.append("price", data?.price)
        bodyFormData.append("quantity", data?.quantity)
        bodyFormData.append("image", data?.productImage)
        console.log("bodyFormData", bodyFormData)
        return {
          url: "api/addproduct",
          method: "POST",
          body: bodyFormData
        }
      },
      invalidatesTags: ["Products"]
    }),
    updateproduct: build.mutation({
      query: (data) => {
        console.log("data", data)
        var bodyFormData = new FormData()
        const paramsKey = ["id", "name", "price", "quantity"]
        for (const val of paramsKey) {
          if (data[val]) bodyFormData.append(val, data[val])
        }
        bodyFormData.append("image", data?.productImage)
        return {
          url: "api/updateproduct",
          method: "POST",
          body: bodyFormData,
          formData: true
        }
      },
      invalidatesTags: ["Products"]
    }),
    getProducts: build.query({
      query: () => ({
        url: "api/getproducts",
        method: "GET"
      }),
      providesTags: ["Products"]
    }),
    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: "api/deleteproduct",
        method: "POST",
        body: { id }
      }),
      invalidatesTags: ["Products"]
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

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateproductMutation,
  useDeleteProductMutation
} = productApi
