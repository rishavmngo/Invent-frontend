import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/authSlice";
import { authApiSlice } from "./auth/authApiSlice";
import { businessApiSlice } from "./business/businessApiSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [businessApiSlice.reducerPath]: businessApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(businessApiSlice.middleware);
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
