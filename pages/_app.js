import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import "@styles/globals.css";
import theme from "../chakra.config";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </ChakraProvider>
  );
}

export default App;
