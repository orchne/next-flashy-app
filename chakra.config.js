import { extendTheme } from "@chakra-ui/react";
import global from "./global.config.js";

const theme = extendTheme({
  fonts: global.Font.chakra(),
  colors: global.Color.chakra(),
});

export default theme;
