import { Business } from "@/types/auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootType } from "../store";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/business",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootType;
    const token = state.auth.token;
    if (token) headers.set("secret_token", token);

    return headers;
  },
});
export const businessApiSlice = createApi({
  reducerPath: "businessapi",
  baseQuery,
  endpoints: (builder) => {
    return {
      getLoginedBusiness: builder.query<Business, void>({
        query: () => "/",
      }),
    };
  },
});

export const { useGetLoginedBusinessQuery } = businessApiSlice;
