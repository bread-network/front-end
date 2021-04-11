import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const router = useRouter()
  const dispatcher = useDispatch()
  const [showError, setError] = useState(false)
  const { currentUserHandle } = useSelector((state) => state)
  const [userHandle, setUser] = useState('')

  useEffect(() => {
    if (currentUserHandle && currentUserHandle.length > 0) {
      router.push('/home')
    }
  }, [currentUserHandle])

  const login = () => {
    fetch(`http://41fbe093e4cd.ngrok.io/verify-user/${userHandle}`, {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        if (resp['exists']) {
          dispatcher({
            type: 'UPDATE_USER_HANDLE',
            payload: {
              user_handle: userHandle,
            },
          })
          dispatcher({
            type: 'UPDATE_USER_IMG',
            payload: {
              user_img: resp['profile_image_url_https'],
            },
          })
        } else {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 2000)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Head>
        <title>Login | Bread</title>
      </Head>
      <div className="h-screen w-full flex flex-col items-center">
        <div className="flex flex-col items-start">
          <img className="mt-5 h-12" src="https://bread.vercel.app/bread.svg" />
          <h1 className="mt-8 text-orange-500 font-extrabold text-3xl">
            Log in to Bread
          </h1>
          {showError && (
            <div className="mt-3 p-2 text-md bg-red-500 rounded-lg text-white max-w-[300px]">
              The username and password you entered did not match our records.
              Please double-check and try again.
            </div>
          )}
          <input
            value={userHandle}
            onChange={(e) => setUser(e.target.value)}
            className="mt-5 focus:border-gray-300 focus:outline-none appearance-none border rounded-md text-xl p-3"
            type="text"
            placeholder="username"
          />
          <button
            onClick={() => {
              login()
            }}
            disabled={userHandle.length <= 2}
            className={`${
              userHandle.length <= 2
                ? 'bg-yellow-300 cursor-not-allowed'
                : 'bg-yellow-400 shadow cursor-pointer'
            } w-full focus:outline-none text-white mt-7 flex py-2 pl-3 pr-4 rounded-full font-bold space-x-4 items-center justify-center`}
          >
            <span className="text-md py-1"> Login </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Index
