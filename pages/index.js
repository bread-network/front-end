import { useState } from 'react'
import Head from 'next/head'

const Index = () => {
  const [userHandle, setUser] = useState('')

  const login = () => {
    console.log(userHandle)
  }

  return (
    <>
      <Head>
        <title>Login | Bread</title>
      </Head>
      <div className="h-screen w-full flex flex-col items-center">
        <div className="flex flex-col items-start">
          <img
            className="mt-5 h-12"
            src="https://bread-multi-grain.vercel.app/logo.svg"
          />
          <h1 className="mt-8 text-orange-500 font-extrabold text-3xl">
            Log in to Bread
          </h1>
          <input
            value={userHandle}
            onChange={(e) => setUser(e.target.value)}
            className="mt-5 focus:border-yellow-500 focus:outline-none appearance-none border rounded-md text-xl p-3"
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
