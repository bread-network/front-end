import useSWR from 'swr'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '@/components/Menu'
import Bake from '@/components/Bake'
import Button from '@/components/Button'
import HomeBar from '@/components/HomeBar'
import fetcher from '@/components/Fetcher'
import { useRouter } from 'next/router'
import ErrorLoading from '@/components/ErrorLoading'
import BakingData from '@/components/BakingData'

const Home = () => {
  const router = useRouter()
  const { data, error } = useSWR(
    'https://41fbe093e4cd.ngrok.io/get-loafs',
    fetcher
  )
  console.log(data)

  return (
    <>
      {' '}
      <Head>
        <title>Home | Bread</title>
      </Head>
      <div className="bg-white flex md:space-x-12">
        <ul className="hidden md:block list-none">
          <div className="sticky top-4">
            {Menu(1).map((item) => (
              <Button
                key={item.name}
                name={item.name}
                selected={item.selected}
                svg={item.svg}
                onClick={() => {
                  router.push(item.route)
                }}
              />
            ))}
          </div>
        </ul>
        <div className="flex flex-col w-full max-w-[600px] md:min-w-[75vw]">
          <HomeBar />
          <Bake />
          <div className="bg-gray-100 py-1"></div>
          {error && <ErrorLoading />}
          {!error && !data && <BakingData />}
          {!error && data && (
            <div className="flex flex-row flex-wrap">
              {data['loafs'].map((item) => (
                <Link key={item.name} href={'/loaf/' + item.name}>
                  <a className="p-2 rounded-lg relative flex flex-col items-center justify-center space-x-4 w-full md:w-1/2">
                    <div className="w-full h-full rounded-[12px] bg-[#FFD679]">
                      <img
                        src={item.image}
                        className="rounded-[12px] w-full h-full opacity-40 object-cover"
                      />
                    </div>
                    <div className="rounded-lg absolute top-0 z-5 flex flex-col justify-center items-center h-full w-full text-center">
                      <span className="font-black text-black text-lg break-normal">
                        {item.name}
                      </span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
