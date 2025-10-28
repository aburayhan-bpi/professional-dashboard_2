import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}

// Auth state interface
export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },

    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken?: string }>
    ) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken ?? null;

      Cookies.set("accessToken", accessToken, {
        expires: 1,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });
      if (refreshToken) {
        Cookies.set("refreshToken", refreshToken, {
          expires: 7,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });
      } else {
        Cookies.remove("refreshToken");
      }
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      Cookies.remove("authUser");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },

    clearAuthError: () => {},
  },
});

export const { setUser, setTokens, logout, clearAuthError } = authSlice.actions;

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;

export default authSlice.reducer;
