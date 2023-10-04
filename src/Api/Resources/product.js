import api from "../Api"

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => {
        console.log("data", data)
        var bodyFormData = new FormData()
        bodyFormData.append("name", data?.name)
        bodyFormData.append("price", data?.price)
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
        const paramsKey = ["id", "name", "price"]
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
  }),
  overrideExisting: false
})

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateproductMutation,
  useDeleteProductMutation
} = productApi
