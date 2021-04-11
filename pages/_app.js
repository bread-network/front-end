import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'

const MyApp = ({ Component, pageProps }) => {
  const [typeMedia, setMedia] = useState('print')
  const store = useStore(pageProps.initialReduxState)

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
