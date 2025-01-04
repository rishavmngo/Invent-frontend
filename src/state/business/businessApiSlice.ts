import { Business } from "@/types/auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface CustomQueryExtra {
  token: string;
}
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/business",
  prepareHeaders: (headers, { extra }) => {
    const typedExtra = extra as CustomQueryExtra;
    headers.set("secret_token", (extra as CustomQueryExtra).token);

    return headers;
  },
});
export const businessApiSlice = createApi({
  reducerPath: "businessapi",
  // baseQuery,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/business",
  }),
  endpoints: (builder) => {
    return {
      getLoginedBusiness: builder.query<Business, { token: string | null }>({
        query: ({ token }) => ({
          url: "/",
          headers: token ? { secret_token: token } : {},
        }),
      }),
    };
  },
});

export const { useGetLoginedBusinessQuery } = businessApiSlice;
