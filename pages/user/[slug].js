import useSWR from 'swr'
import Head from 'next/head'
import Menu from '@/components/Menu'
import Button from '@/components/Button'
import fetcher from '@/components/Fetcher'
import HomeBar from '@/components/HomeBar'
import ErrorLoading from '@/components/ErrorLoading'
import BakingData from '@/components/BakingData'
import { useRouter } from 'next/router'
import UserProfile from '@/components/UserProfile'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Loaf = () => {
  const router = useRouter()
  const { slug } = router.query
  const {requestPrefix}= useSelector((state) => state)
  const { data, error } = useSWR(
    `${requestPrefix}/user/${slug}`,
    fetcher
  )
  const [all_annotations, setAllAnnotations] = useState([])
  console.log(data)

  useEffect(() => {
    if (data && data['user']['annotation']['annotations']) {
      data['user']['annotation']['annotations'].map((item, index) => {
        if (index <= 50) {
          const tweet_id = Object.keys(item)[0]
          fetch(`${requestPrefix}/stick/` + tweet_id, {
            method: 'GET',
          })
            .then((resp) => resp.json())
            .then((resp) => {
              if (resp['stick'])
                setAllAnnotations((all_annotations) => [
                  ...all_annotations,
                  resp['stick'],
                ])
            })
            .catch((error) => {
              console.log(error)
            })
          return <div></div>
        } else {
          return
        }
      })
    }
  }, [data])

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
        <div className="flex flex-col w-full max-w-[600px] md:min-w-[75vw]">
          {data && data['user'] && <HomeBar title={data['user']['name']} />}
          <div className="bg-gray-100 py-1"></div>
          {error && <ErrorLoading />}
          {!error && !data && <BakingData />}
          {!error && data && (
            <div className="flex flex-col items-center">
              <UserProfile
                all_annotations={all_annotations}
                {...data['user']}
              />
            </div>
          )}
          {error && <ErrorLoading />}
          {!error && !data && <BakingData />}
        </div>
      </div>
    </>
  )
}

export default Loaf
