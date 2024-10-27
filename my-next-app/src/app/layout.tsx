import type { Metadata } from "next";

import "./globals.css";
import { montserrat } from "./fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Alireza Nikzad",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
