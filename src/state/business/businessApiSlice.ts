import { AuthResult, BusinessLoginCredentials } from "@/types/auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const businessApiSlice = createApi({
  reducerPath: "businessapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/business",
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation<AuthResult, BusinessLoginCredentials>({
        query: (user) => ({
          url: "/login",
          method: "POST",
          body: user,
        }),
      }),
      signup: builder.mutation<AuthResult, BusinessLoginCredentials>({
        query: (user) => ({
          url: "/signup",
          method: "POST",
          body: user,
        }),
      }),
    };
  },
});
