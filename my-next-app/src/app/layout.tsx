import type { Metadata } from "next";

import "./globals.css";
import { montserrat } from "./fonts";

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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
