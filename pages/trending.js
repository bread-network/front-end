import Head from 'next/head'
import dynamic from 'next/dynamic'
import Menu from '@/components/Menu'
import Bake from '@/components/Bake'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import HomeBar from '@/components/HomeBar'

const TweetsList = dynamic(
  () => import('@/components/ShowTweets'),
  { ssr: false, loading: () => <p>...</p> }
)

const Trending = () => {
  const router = useRouter();
  return <> <Head>
    <title>Trending | Bread</title>
  </Head>
    <div className="bg-white flex md:space-x-12">
      <ul className="hidden md:block list-none">
        <div className='sticky top-4'>
          {Menu(2).map((item) => (
            <Button
              key={item.name}
              name={item.name}
              selected={item.selected}
              svg={item.svg}
              onClick={() => { router.push(item.route) }}
            />
          ))}
        </div>
      </ul>
      <div className="flex flex-col w-full max-w-[600px]">
        <HomeBar />
        <Bake />
        <div className="bg-gray-100 py-1"></div>
        <div className="flex flex-col">
          {Tweets && Tweets.length > 0 && <TweetsList tweets={Tweets} />}
        </div>
      </div>
    </div>
  </>
}

export default Trending
