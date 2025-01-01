import { BusinessLoginCredentials, AuthResult } from "@/types/auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authu",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth",
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

export const { useLoginMutation, useSignupMutation } = authApiSlice;
