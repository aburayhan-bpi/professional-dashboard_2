//  for email verification , otp, forgot password

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getEmailForOtp = () => {
  if (typeof window !== "undefined") {
    const email = sessionStorage.getItem("emailVerifyOtp");
    return email;
  }
  return null;
};

export interface VerifyOtpState {
  emailVerifyOtp: string | null;
}

const initialState: VerifyOtpState = {
  emailVerifyOtp: getEmailForOtp(),
};

const verifyAuthSlice = createSlice({
  name: "emailVerifyOtpSlice",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.emailVerifyOtp = action.payload;
      sessionStorage.setItem("emailVerifyOtp", action.payload);
    },
    clearEmail: (state) => {
      state.emailVerifyOtp = null;
      sessionStorage.removeItem("emailVerifyOtp");
    },
  },
});

export const { setEmail, clearEmail } = verifyAuthSlice.actions;

export const selectEmail = (state: { verifyAuth: VerifyOtpState }) =>
  state?.verifyAuth?.emailVerifyOtp;

export default verifyAuthSlice.reducer;
