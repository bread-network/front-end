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

const TweetsList = dynamic(
    () => import('@/components/ShowTweets'),
    { ssr: false, loading: () => <p>...</p> }
)

const Loaf = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { data, error } = useSWR(`https://267d633340ff.ngrok.io/loafs/${slug}`, fetcher);
    console.log(data && data['sticks']);

    return <> <Head>
        <title>{slug} | Bread</title>
    </Head>
        <div className="bg-white flex md:space-x-12">
            <ul className="hidden md:block list-none">
                <div className='sticky top-4'>
                    {Menu(-1).map((item) => (
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
            <div className="flex flex-col w-full max-w-[600px] md:min-w-[600px]">
                <HomeBar />
                <Bake />
                <div className="bg-gray-100 py-1"></div>
                {error && <ErrorLoading />}
                {!error && !data && <BakingData />}
                {!error && data && <div className="flex flex-col items-center">
                    {<TweetsList tweets={data['sticks']} />}
                </div>}
            </div>
        </div>
    </>
}

export default Loaf