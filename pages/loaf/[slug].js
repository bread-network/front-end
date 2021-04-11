import useSWR from 'swr'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Menu from '@/components/Menu'
import Bake from '@/components/Bake'
import Button from '@/components/Button'
import fetcher from '@/components/Fetcher'
import HomeBar from '@/components/HomeBar'
import ErrorLoading from '@/components/ErrorLoading'
import BakingData from '@/components/BakingData'
import { useRouter } from 'next/router'

const TweetsList = dynamic(() => import('@/components/ShowTweets'), {
  ssr: false,
  loading: () => <BakingData />,
})

const Loaf = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data, error } = useSWR(
    `https://d7a928d66a2c.ngrok.io/loafs/${slug}`,
    fetcher
  )
  console.log(data && data['sticks'])

  return (
    <>
      {' '}
      <Head>
        <title>{slug} | Bread</title>
      </Head>
      <div className="bg-white flex md:space-x-12">
        <ul className="hidden md:block list-none">
          <div className="sticky top-4">
            {Menu(-1).map((item) => (
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
        <div className="flex flex-col w-full max-w-[600px] md:min-w-[1000px]">
          <HomeBar title={slug} />
          <div className="bg-gray-100 py-1"></div>
          {error && <ErrorLoading />}
          {!error && !data && <BakingData />}
          {!error && data && (
            <div className="flex flex-row flex-wrap">
              <div className="w-1/2 flex flex-col">
                {
                  <TweetsList
                    hideNameandDate={true}
                    tweets={data['sticks'].filter(
                      (item) => item.annotation.polarity_score > 0.5
                    )}
                  />
                }
              </div>
              <div className="w-1/2 flex flex-col">
                {
                  <TweetsList
                    hideNameandDate={true}
                    tweets={data['sticks'].filter(
                      (item) => item.annotation.polarity_score < 0.5
                    )}
                  />
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Loaf
