import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authApiSlice = createApi({
  reducerPath: "inventoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/inventory",
  }),
  endpoints: (builder) => {
    return {
      // getAllInventory: builder.query<>({
      //   query:()=>({
      //
      //   })
      // })
    };
  },
});
