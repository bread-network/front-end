import dynamic from 'next/dynamic'
import BakingData from './BakingData'

const TweetsList = dynamic(() => import('@/components/ShowTweets'), {
  ssr: false,
  loading: () => <BakingData />,
})

const UserProfile = ({
  all_annotations,
  screen_name,
  name,
  description,
  followers_count,
  friends_count,
  profile_image_url_https,
  profile_background_image_url_https,
  annotation,
  verified,
}) => {
  return (
    <div className="relative flex flex-col">
      <img
        src={profile_background_image_url_https}
        className="w-full h-48 mb-56 object-cover"
      />
      <div className="flex flex-col absolute top-32 left-5 items-start">
        <img
          src={profile_image_url_https}
          className="shadow-lg rounded-full h-32 w-32 object-cover"
        />
        <span className="text-black text-lg font-bold mt-3">{name}</span>
        <span className="text-gray-500 text-sm">@{screen_name}</span>
        <span className="mt-5 text-black text-md">{description}</span>
        <span className="mt-3 text-black text-md">
          <span className="font-bold text-black">{followers_count}</span>
          <span className="ml-1">Following</span>
          <span className="ml-3 font-bold text-black">{friends_count}</span>
          <span className="ml-1">Followers</span>
          <span className="ml-3 font-bold text-black">
            {annotation.credibility_score}
          </span>
          <span className="ml-1">Correctly annotated breads</span>
        </span>
      </div>
      <h1 className="border-t text-green-500 text-md font-bold pt-3 mb-3">
        My Annotations
      </h1>
      {all_annotations && all_annotations.length > 0 && (
        <TweetsList showMy={true} tweets={all_annotations} />
      )}
    </div>
  )
}

export default UserProfile
