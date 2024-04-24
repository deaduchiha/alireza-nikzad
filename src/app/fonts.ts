import {
  Vazirmatn,
  Noto_Sans_Arabic,
  Noto_Kufi_Arabic,
} from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "auto",
  weight: ["400", "700"],
  variable: "--fonts-vazirmatn",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "400", "700"],
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export { vazirmatn, notoSansArabic, notoKufiArabic };
