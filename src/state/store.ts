import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/authSlice";
import { authApiSlice } from "./auth/authApiSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApiSlice.middleware);
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
