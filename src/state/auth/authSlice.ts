import { Business } from "@/types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  user: Business | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Partial<AuthState>>) => {
      return { ...state, ...action.payload };
    },
    logout: (state) => {
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
