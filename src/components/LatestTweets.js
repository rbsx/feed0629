import React from 'react'

import Article from './Article'
import useLatestTweets from '../hooks/useLatestTweets'

const LatestTweets = () => {
  let tweets = useLatestTweets({ pollInterval: 2000 })

  return (
    <React.Fragment>
      {tweets?.map((tweet) => (
        <Article key={tweet.id} {...tweet} />
      ))}
    </React.Fragment>
  )
}

export default LatestTweets
