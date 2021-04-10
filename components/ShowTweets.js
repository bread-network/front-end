import Tweet from '@/components/Tweet'

const ShowTweets = ({ tweets }) => {
    return <>{tweets.map((item, index) => (
        <Tweet key={index} {...item} />
    ))}</>
}

export default ShowTweets