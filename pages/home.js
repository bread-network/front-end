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

    const router = useRouter();
    const { data, error } = useSWR('https://267d633340ff.ngrok.io/get-loafs', fetcher);
    console.log(data);

    return <> <Head>
        <title>Home | Bread</title>
    </Head>
        <div className="bg-white flex md:space-x-12">
            <ul className="hidden md:block list-none">
                <div className='sticky top-4'>
                    {Menu(1).map((item) => (
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
                {error && <ErrorLoading /> }
                {!error && !data && <BakingData />}
                {!error && data && <div className="flex flex-row flex-wrap">
                    {data['loafs'].map((item) => <Link key={item.name} href={'/loaf/' + item.name}>
                        <a className='p-2 rounded-lg relative flex flex-col items-center justify-center space-x-4 w-full md:w-1/2'>
                            <img src={item.image} className='rounded-lg h-auto' />
                            <div className='rounded-lg absolute z-0 right-5 bottom-5 text-white font-bold bg-[#FFD679] opacity-70 h-5/6 w-5/6'></div>
                            <div className='rounded-lg absolute top-0 z-5 h-full w-full flex flex-col justify-center items-center h-5/6 w-5/6 text-center'>
                                <span className='font-black text-black text-lg break-normal'>
                                    {item.name}
                                </span>
                            </div>
                        </a>
                    </Link>)}
                </div>}
            </div>
        </div>
    </>
}

export default Home
