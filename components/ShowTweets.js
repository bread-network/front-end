import Tweet from '@/components/Tweet'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IP } from './port'

const EachTweet = ({ showMy, item, hideNameandDate }) => {
  const [pass_item, set_pass_item] = useState(item)
  console.log('item', item)

  useEffect(() => {
    if (showMy) {
      fetch(
        `${IP}/user-annotation/${item.username}/${item.id}`,
        {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          if (res['score'] && res['score'] >= 0) {
            set_pass_item({ ...item, score_polarity: res['score'] })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  return (
    <Tweet hideNameandDate={hideNameandDate} showMy={showMy} {...pass_item} />
  )
}

const ShowTweets = ({ showMy, tweets, hideNameandDate }) => {
  return (
    <>
      {tweets.map((item) => {
        const temp = {
          id: item.id,
          username: item.user.screen_name,
          useractualname: item.user.name,
          userverified: item.user.verified,
          userimg: item.user.profile_image_url_https,
          time: item.created_at,
          text: item.text,
          replies: item.reply_count,
          likes: item.favorite_count,
          retweets: item.retweet_count,
          annotation: item.annotation,
        }
        return (
          <EachTweet
            hideNameandDate={hideNameandDate ? hideNameandDate : false}
            showMy={showMy ? showMy : false}
            key={item.id}
            item={temp}
          />
        )
      })}
    </>
  )
}

export default ShowTweets
