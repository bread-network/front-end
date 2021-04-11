import useSWR from 'swr'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Menu from '@/components/Menu'
import Button from '@/components/Button'
import fetcher from '@/components/Fetcher'
import HomeBar from '@/components/HomeBar'
import ErrorLoading from '@/components/ErrorLoading'
import BakingData from '@/components/BakingData'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const TweetsList = dynamic(() => import('@/components/ShowTweets'), {
  ssr: false,
  loading: () => <BakingData />,
})

const Loaf = () => {
  const router = useRouter()
  const [weather, setWeath] = useState(false)
  const [toAno, setToAno] = useState([])
  const {requestPrefix}= useSelector((state) => state)
  const { slug } = router.query
  const { data, error } = useSWR(
    `${requestPrefix}/loafs/${slug}`,
    fetcher
  )
  const { currentUserHandle } = useSelector((state) => state)
  const [sliderVal, setSliderVal] = useState(50)

  useEffect(() => {
    if (slug)
      fetch(
        `${requestPrefix}/annotation-request/${currentUserHandle}/${slug}`,
        {
          method: 'GET',
        }
      )
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp['annotation']) {
            console.log(resp)
            setWeath(true)
            setToAno((toAno) => [...toAno, resp['bread']])
          }
        })
        .catch((error) => {
          console.log(error)
        })
  }, [])

  let hitSubmit = () => {
    console.log({
      username: currentUserHandle,
      stick_id: toAno[0].id,
      score: sliderVal / 100,
    })
    fetch(
      `${requestPrefix}/annotate?username=${currentUserHandle}&stick_id=${toAno[0].id}&score=${sliderVal / 100}`,
      {
        method: 'POST',
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setWeath(false);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Head>
        <title>{slug} | Bread</title>
      </Head>
      {weather && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <img
                      src="https://bread.vercel.app/bread.svg"
                      height="50px"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Hey, we have noticed that you read this topic a lot.
                      Hence, we would like to know what do you think about this
                      bread?
                    </h3>
                    <div className="mt-2 flex flex-col">
                      {toAno && toAno.length > 0 && (
                        <TweetsList hideNameandDate={true} tweets={toAno} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 w-full flex flex-col items-center">
                <div className="flex flex-row items-center space-x-2">
                  <span className="font-bold text-md text-red-400">
                    Against
                  </span>
                  <input
                    value={sliderVal}
                    onChange={(e) => setSliderVal(e.target.value)}
                    type="range"
                    className="appearance-none focus:outline-none h-2 text-yellow-500 bg-gradient-to-r from-red-700 via-yellow-100 to-green-700 rounded-full"
                  />
                  <span className="font-bold text-md text-green-400">
                    In Favour
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setWeath(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
                <button
                  onClick={() => hitSubmit()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
        <div className="flex flex-col w-full max-w-[600px] md:min-w-[75vw]">
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
