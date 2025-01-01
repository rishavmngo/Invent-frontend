import { setToken } from "@/lib/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  status: "idle",
  error: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    // login: ()
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "succeeded";
        state.token = action.payload;
      });
  },
});

type returnPayload = {
  token: string;
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials: { email: string; password: string }) => {
    const result = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    });
    const tokenRes: returnPayload = await result.json();
    console.log(tokenRes);
    setToken(tokenRes.token);
    return tokenRes.token;
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const result = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    });
    const tokenRes: returnPayload = await result.json();
    console.log(tokenRes);
    setToken(tokenRes.token);
    return tokenRes.token;
  },
);

export default AuthSlice.reducer;
