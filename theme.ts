import { extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const portfolio = defineStyle({
  border: "1.5px solid #7A87FB",
  color: "#252525",
  bgGradient: "linear(to-r, #7A87FB, #FFD49C)",
  borderRadius: "full",
  transition: "0.6s",
  _hover: {
    bgGradient: "linear(to-r, #FFD49C, #7A87FB)",
    border: "1.5px solid #FFD49C",
    color: "#fff",
  },
});
const buttonTheme = defineStyleConfig({
  variants: { portfolio },
});

export const theme = extendTheme({
  colors: {},
  components: {
    Button: buttonTheme,
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  styles: {
    global: {
      body: {
        bg: "#101111",
        color: "#FFFFFF",
        overflowX: "hidden",
      },
    },
  },
});
