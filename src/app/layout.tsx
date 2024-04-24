import type { Metadata } from "next";
import { vazirmatn } from "./fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Alireza Nikzad",
  description: "Personal website for alireza nikzad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
