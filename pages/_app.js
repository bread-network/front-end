import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const [typeMedia, setMedia] = useState('print')
  useEffect(() => {
    setMedia('all')
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en')
  }, [])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="https://bread.vercel.app/bread.svg" />
        <link
          media={typeMedia}
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-display bg-white flex flex-col items-center">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
