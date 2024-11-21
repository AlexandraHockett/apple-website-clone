import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Apple Website - CLONE",
  description:
    "A visually stunning and interactive clone of the Apple website, built using Next.js, GSAP, and Three.js for advanced animations and 3D graphics.",
  icons: {
    icon: "/images/apple.svg",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
