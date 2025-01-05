import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootType } from "../store";
import { InventoryItems } from "@/types/inventory.types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/inventory",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootType;
    const token = state.auth.token;
    if (token) headers.set("secret_token", token);
    return headers;
  },
});

export const inventoryApi = createApi({
  reducerPath: "inventoryApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllInventory: builder.query<InventoryItems, void>({
      query: () => "/getAll",
    }),
  }),
});

export const { useGetAllInventoryQuery } = inventoryApi;
