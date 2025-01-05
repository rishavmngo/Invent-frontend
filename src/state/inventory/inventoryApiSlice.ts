import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootType } from "../store";
import { FormFields, InventoryItems } from "@/types/inventory.types";

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
  tagTypes: ["Inventory"],
  endpoints: (builder) => ({
    getAllInventory: builder.query<InventoryItems, void>({
      query: () => "/getAll",
    }),

    addInventory: builder.mutation<void, FormFields>({
      query: (inventory) => ({
        url: "/add",
        method: "POST",
        body: inventory,
      }),
      invalidatesTags: ["Inventory"],
    }),
  }),
});

export const { useGetAllInventoryQuery, useAddInventoryMutation } =
  inventoryApi;
