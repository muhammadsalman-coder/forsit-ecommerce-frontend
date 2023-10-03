import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const MAIN_API_REDUCER_KEY = "mainapi"
export const baseURl = "http://localhost:8080/"

const Api = createApi({
  reducerPath: MAIN_API_REDUCER_KEY,
  tagTypes: ["Products", "Order"],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURl
  }),
  keepUnusedDataFor: 30,
  endpoints: () => ({})
})
export default Api
