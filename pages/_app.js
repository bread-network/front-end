import '@/styles/global.css'
import Head from 'next/head'
import Nav from '@/components/navbar'
import Footer from '@/components/footer'
import { pageMotionProps, structuredData } from '@/components/data'
import { motion, AnimatePresence } from 'framer-motion'
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
