import Tweet from '@/components/Tweet'

const EachTweet = ({ item }) => {
    return <Tweet {...item} />
}

const ShowTweets = ({ tweets }) => {
    return <>{tweets.map((item) => {
        const temp = {
            username: item.user.screen_name,
            useractualname: item.user.name,
            userverified: item.user.verified,
            userimg: item.user.profile_picture_url,
            time: item.created_at,
            text: item.text,
            replies: item.reply_count,
            likes: item.favorite_count,
            retweets: item.retweet_count
        };
        return <EachTweet key={item.id} item={temp} />
    })}</>
}

export default ShowTweets