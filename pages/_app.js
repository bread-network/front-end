import '@/styles/global.css'
import Head from 'next/head'
import Nav from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
});

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <ChakraProvider theme={theme}>
        {/* {router.pathname !== '/login' && <Nav />} */}
        <Component {...pageProps} />
        {/* {router.pathname !== '/login' && <Footer />} */}
      </ChakraProvider>
    </>
  )
}

export default MyApp
