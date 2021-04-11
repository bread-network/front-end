import useSWR from 'swr'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Menu from '@/components/Menu'
import Bake from '@/components/Bake'
import Button from '@/components/Button'
import HomeBar from '@/components/HomeBar'
import ErrorLoading from '@/components/ErrorLoading'
import BakingData from '@/components/BakingData'
import fetcher from '@/components/Fetcher'
import { useRouter } from 'next/router'

const TweetsList = dynamic(() => import('@/components/ShowTweets'), {
  ssr: false,
  loading: () => <BakingData />,
})

const Trending = () => {
  const router = useRouter()
  const { data, error } = useSWR(
    `https://41fbe093e4cd.ngrok.io/trending`,
    fetcher
  )
  console.log(data)

  return (
    <>
      <Head>
        <title>Trending | Bread</title>
      </Head>
      <div className="bg-white flex md:space-x-12">
        <ul className="hidden md:block list-none">
          <div className="sticky top-4">
            {Menu(2).map((item) => (
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
          <HomeBar
            title="Trending"
            svg={
              <svg height="24" viewBox="0 0 24 24" className="fill-current">
                <g>
                  <path
                    className="fill-current"
                    d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
                  ></path>
                </g>
              </svg>
            }
          />
          <Bake />
          <div className="bg-gray-100 py-1"></div>
          {error && <ErrorLoading />}
          {!error && !data && <BakingData />}
          {!error && data && (
            <div className="flex flex-col items-center">
              {<TweetsList tweets={data['sticks'].sort((a, b) => (a.annotation.trend_rank > b.annotation.trend_rank) ? 1 : ((b.annotation.trend_rank > a.annotation.trend_rank) ? -1 : 0))} />}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Trending
