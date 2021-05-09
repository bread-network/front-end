import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import * as gtag from '../lib/gtag'

const MyApp = ({ Component, pageProps }) => {
  const [typeMedia, setMedia] = useState('print')
  const store = useStore(pageProps.initialReduxState)

  useEffect(() => {
    setMedia('all')
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en')
  }, [])

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="bread.svg" />
        <link
          media={typeMedia}
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://bread.vercel.app/"
        />
        <meta
          name="og:title"
          property="og:title"
          content="bRead: Changing the way you consume content on Social Media"
        />
        <meta
          name="og:description"
          property="og:description"
          content="bRead: Changing the way you consume content on Social Media"
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://bread.vercel.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="bRead: Changing the way you consume content on Social Media"
        />
        <meta
          name="twitter:image"
          content="https://bread.vercel.app/og-image.png"
        />
        <meta
          name="twitter:description"
          content="bRead: Changing the way you consume content on Social Media"
        />
      </Head>
      <div className="font-display bg-white flex flex-col items-start md:items-center">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </>
  )
}

export default MyApp
