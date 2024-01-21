import { Providers } from "./providers";
import { fonts } from "@/fonts";

export const metadata = {
  title: "Alireza Nikzad",
  description: "Alireza Nikzad - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
