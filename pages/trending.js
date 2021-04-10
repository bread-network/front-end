import dynamic from 'next/dynamic'
import Head from 'next/head'
import Button from '@/components/Button'

const Menu = (ind) => {
  const Options = [
    {
      name: '',
      selected: false,
      svg: <img src="https://bread.vercel.app/bread.svg" height="50px" />,
    },
    {
      name: 'Home',
      selected: false,
      svg: (
        <svg viewBox="0 0 24 24" className="h-6">
          <g>
            <path
              className="fill-current"
              d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: 'Explore',
      selected: false,
      svg: (
        <svg viewBox="0 0 24 24" className="h-6">
          <g>
            <path
              className="fill-current"
              d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: 'Notifications',
      selected: false,
      svg: (
        <svg viewBox="0 0 24 24" className="h-6">
          <g>
            <path
              className="fill-current"
              d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: 'Bookmarks',
      selected: false,
      svg: (
        <svg viewBox="0 0 24 24" className="h-6">
          <g>
            <path
              className="fill-current"
              d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: 'Lists',
      selected: false,
      svg: (
        <svg viewBox="0 0 24 24" className="h-6">
          <g>
            <path
              className="fill-current"
              d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: 'Profile',
      selected: false,
      svg: (
        <svg viewBox="0 0 24 24" className="h-6">
          <g>
            <path
              className="fill-current"
              d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
            ></path>
          </g>
        </svg>
      ),
    },
  ]
  Options[ind]['selected'] = true
  return Options
}

const Tweets = [
  {
    username: 'ArtofLiving',
    userimg:
      'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
    time: '10m',
    text:
      'It’s been more than a year since the pandemic hit the world and pushed us into social isolation. According to ground breaking research done in 2017, loneliness has been proven to be equivalent to smoking 15 cigarettes a day, making it even more dangerous than obesity.',
    replies: 5,
    likes: 2,
    retweets: 1,
    shares: 10,
  },
  {
    username: 'ArtofLiving',
    userimg:
      'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
    time: '10m',
    quoted: {
      username: 'ArtofLiving',
      userimg:
        'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
      time: '10m',
      text:
        'It’s been more than a year since the pandemic hit the world and pushed us into social isolation. According to ground breaking research done in 2017, loneliness has been proven to be equivalent to smoking 15 cigarettes a day, making it even more dangerous than obesity.',
      replies: 5,
      likes: 2,
      retweets: 1,
      shares: 10,
    },
  },
  {
    username: 'ArtofLiving',
    userimg:
      'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
    time: '10m',
    text:
      'It’s been more than a year since the pandemic hit the world and pushed us into social isolation. According to ground breaking research done in 2017, loneliness has been proven to be equivalent to smoking 15 cigarettes a day, making it even more dangerous than obesity.',
    replies: 5,
    likes: 2,
    retweets: 1,
    shares: 10,
    retweet: {
      name: 'The Art Of Living',
      userhandle: 'ArtOfLiving',
      userimg:
        'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
    },
  },
  {
    username: 'ArtofLiving',
    userimg:
      'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
    time: '10m',
    text:
      'It’s been more than a year since the pandemic hit the world and pushed us into social isolation. According to ground breaking research done in 2017, loneliness has been proven to be equivalent to smoking 15 cigarettes a day, making it even more dangerous than obesity.',
    replies: 5,
    likes: 2,
    retweets: 1,
    shares: 10,
  },
  {
    username: 'ArtofLiving',
    userimg:
      'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
    time: '10m',
    quoted: {
      username: 'ArtofLiving',
      userimg:
        'https://pbs.twimg.com/profile_images/1323493885880934400/EmDZyT4Q_x96.jpg',
      time: '10m',
      text:
        'It’s been more than a year since the pandemic hit the world and pushed us into social isolation. According to ground breaking research done in 2017, loneliness has been proven to be equivalent to smoking 15 cigarettes a day, making it even more dangerous than obesity.',
      replies: 5,
      likes: 2,
      retweets: 1,
      shares: 10,
    },
  },
]

const TweetsList = dynamic(
  () => import('@/components/ShowTweets'),
  { ssr: false, loading: () => <p>...</p> }
)

const Trending = () => {
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
            />
          ))}
        </div>
      </ul>
      <div className="flex flex-col w-full max-w-[600px]">
        <div className="sticky top-0 z-10 bg-white p-2 flex flex-row justify-between items-center border border-gray-100">
          <span className='flex flex-row items-center space-x-4'>
            <img className='md:hidden' src="https://bread.vercel.app/bread.svg" height="50px" />
            <h5 className="text-lg font-extrabold">Home</h5>
          </span>
          <span
            title="Top Tweets"
            className="rounded-full p-2 hover:bg-yellow-100 text-yellow-500 cursor-pointer"
          >
            <svg height="24" viewBox="0 0 24 24" className="fill-current">
              <g>
                <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
              </g>
            </svg>
          </span>
        </div>
        <div className="border border-gray-100 p-2 flex flex-row space-x-4">
          <a
            href="https://twitter.com/rishi_raj_jain_"
            className="relative h-12 w-12 object-cover"
          >
            <span className="hover:opacity-10 absolute bg-black opacity-0 h-10 w-10 rounded-full"></span>
            <img
              className="rounded-full border"
              src="https://pbs.twimg.com/profile_images/1292192144464072704/YyKG_Mx3_400x400.jpg"
            />
          </a>
          <div className="flex flex-col w-full">
            <input
              placeholder="What's happening?"
              className="mt-2 text-xl appearance-none focus:outline-none outline-none"
            />
            <div className="mt-8 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <button
                  title="Media"
                  className="focus:outline-none flex flex-row p-2 rounded-full hover:bg-yellow-100 text-yellow-400 font-bold items-center"
                >
                  <svg height="24" viewBox="0 0 24 24" className="fill-current">
                    <g>
                      <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
                      <circle cx="8.868" cy="8.309" r="1.542"></circle>
                    </g>
                  </svg>
                </button>
                <button
                  title="GIF"
                  className="focus:outline-none flex flex-row p-2 rounded-full hover:bg-yellow-100 text-yellow-400 font-bold items-center"
                >
                  <svg height="24" viewBox="0 0 24 24" className="fill-current">
                    <g>
                      <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path>
                      <path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path>
                    </g>
                  </svg>
                </button>
                <button
                  title="Poll"
                  className="focus:outline-none flex flex-row p-2 rounded-full hover:bg-yellow-100 text-yellow-400 font-bold items-center"
                >
                  <svg height="24" viewBox="0 0 24 24" className="fill-current">
                    <g>
                      <path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path>
                    </g>
                  </svg>
                </button>
                <button
                  title="Emoji"
                  className="focus:outline-none flex flex-row p-2 rounded-full hover:bg-yellow-100 text-yellow-400 font-bold items-center"
                >
                  <svg height="24" viewBox="0 0 24 24" className="fill-current">
                    <g>
                      <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                      <path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path>
                      <circle cx="14.738" cy="9.458" r="1.478"></circle>
                      <circle cx="9.262" cy="9.458" r="1.478"></circle>
                    </g>
                  </svg>
                </button>
                <button
                  title="Schedule"
                  className="focus:outline-none flex flex-row p-2 rounded-full hover:bg-yellow-100 text-yellow-400 font-bold items-center"
                >
                  <svg height="24" viewBox="0 0 24 24" className="fill-current">
                    <g>
                      <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path>
                      <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"></path>
                      <path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path>
                      <path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <button
                disabled
                className="focus:outline-none text-md text-white bg-yellow-300 py-2 px-4 font-bold rounded-full"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-1"></div>
        <div className="flex flex-col">
          {Tweets && Tweets.length > 0 && <TweetsList tweets={Tweets} />}
        </div>
      </div>
    </div>
  </>
}

export default Trending
