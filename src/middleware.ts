import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const authRoutes = [
  "/login",
  "/signup",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/reset-success",
  "/verify-otp",
];
const protectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;
  const isAuthenticated = Boolean(token);

  // Redirect authenticated users away from auth pages
  if (
    authRoutes.some((route) => pathname.startsWith(route)) &&
    isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protect dashboard routes
  if (
    protectedRoutes.some((route) => pathname.startsWith(route)) &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
