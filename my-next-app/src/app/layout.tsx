import type { Metadata } from "next";

import "./globals.css";
import { kdamThmorPro } from "./fonts";

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
      <body className={kdamThmorPro.className}>{children}</body>
    </html>
  );
}
