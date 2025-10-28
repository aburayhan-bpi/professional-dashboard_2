/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body: any) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body: any) => ({
        url: "/auth/reset-password",
        method: "POST",
        body,
      }),
    }),
    resendOtp: builder.mutation({
      query: (body: any) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body: any) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
} = authApi;
