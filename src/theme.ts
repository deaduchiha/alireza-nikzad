/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { notoSansArabic, vazirmatn } from "./app/fonts";
import { job, name } from "./theme/heading";

export const theme = extendTheme({
  fonts: {
    heading: notoSansArabic.style.fontFamily,
    body: vazirmatn.style.fontFamily,
  },
  styles: {
    global: () => ({
      body: {
        bg: "#f8f9fa",
      },
    }),
  },
  components: {
    Heading: {
      variants: {
        name: name,
        job: job,
      },
    },
  },
});
