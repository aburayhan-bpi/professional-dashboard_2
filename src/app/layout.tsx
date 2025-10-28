/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "../providers/theme-provider";
import ReduxProvider from "../redux/ReduxProvider";
import "./globals.css";
const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Professional Dashboard Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        data-gramm="false"
        data-gramm_editor="false"
      >
        <ReduxProvider>
          <SpeedInsights />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
