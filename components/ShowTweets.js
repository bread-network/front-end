import Tweet from '@/components/Tweet'

const EachTweet = ({ showMy, item }) => {
    return <Tweet showMy={showMy} {...item} />
}

const ShowTweets = ({ showMy, tweets }) => {
    return <>{tweets.map((item) => {
        const temp = {
            username: item.user.screen_name,
            useractualname: item.user.name,
            userverified: item.user.verified,
            userimg: item.user.profile_image_url_https,
            time: item.created_at,
            text: item.text,
            replies: item.reply_count,
            likes: item.favorite_count,
            retweets: item.retweet_count,
            annotation: item.annotation
        };
        return <EachTweet showMy={showMy ? showMy : false} key={item.id} item={temp} />
    })}</>
}

export default ShowTweets