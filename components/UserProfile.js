const UserProfile = ({ screen_name, name, description, followers_count, friends_count, profile_image_url_https, profile_background_image_url_https, annotation, verified }) => {
    return <div className='relative flex flex-col'>
        <img src={profile_background_image_url_https} className='w-full h-48 object-cover' />
        <div className='flex flex-col absolute top-32 left-5 items-center'>
            <img src={profile_image_url_https} className='rounded-full h-24 w-24 object-cover' />
            <span className='text-black text-lg font-bold mt-3'>
                {name}
            </span>
            <span className='text-gray-500 text-sm'>
                @{screen_name}
            </span>
        </div>
        <span className='mt-28 ml-5 text-black text-md'>
            {description}
        </span>
        <span className='mt-3 ml-5 text-black text-md'>
            <span className='font-bold text-black'>
                {followers_count}
            </span>
            <span className='ml-1'>
                Following
            </span>
            <span className='ml-3 font-bold text-black'>
                {friends_count}
            </span>
            <span className='ml-1'>
                Followers
            </span>
        </span>
    </div>
}

export default UserProfile