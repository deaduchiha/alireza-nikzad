"use client";

import "./globals.css";
import { Inter } from "next/font/google";

import { Scrollbar } from "react-scrollbars-custom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "alireza",
  description: "Alireza Nikzad - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
