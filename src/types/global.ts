export interface IBaseResponse<T = void> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

// How It Works Card Props === HOMEPAGE

export interface HowItWorksCardProps {
  serial: number;
  title: string;
  subtitle: string;
  titleColor?: string;
  sectionBg?: string;
}

// Icon section type
export interface iconArrType {
  id: number;
  icon: string;
  title: string;
}

// auth flow types

// Login Types
export interface ILoginPayload {
  email: string;
  password: string;
}

export type ILoginResponse = IBaseResponse<{ accessToken: string }>;

// ===================
// Password Change Types

// Forgot types
export interface IForgotPasswordPayload {
  email: string;
}
export type IForgotPasswordResponse = IBaseResponse;

// Resend OTP
export interface IResendOTPReqBody {
  email: string;
}
// export interface IResendOTPBaseResponse {
//   success: boolean;
//   statusCode: number;
//   message: string;
// }
export type IResendOTPBaseResponse = IBaseResponse;

// Reset Password
export interface IResetPasswordPayload {
  newPassword: string;
  confirmPassword: string;
}

export type IResetPasswordResponse = IBaseResponse;

// Verify OTP type
export interface IVerifyOTPPayload {
  email: string;
  otp: string;
}

export type IVerifyOTPResponse = IBaseResponse<{ message: string }>;
