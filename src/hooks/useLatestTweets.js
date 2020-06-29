import { useEffect } from 'react'
import { orderBy } from 'lodash/fp'
import { useDispatch, useSelector } from 'react-redux'

import useInterval from './useInterval'
import { updateTweets } from '../lib/actions'

const useLatestTweets = ({ pollInterval }) => {
  let dispatch = useDispatch()
  let { byId, isPaused } = useSelector((state) => state.tweets)
  let orderedTweets = orderBy(['timeStamp'], ['desc'])(byId)

  // initial fetch on mount
  useEffect(() => {
    dispatch(updateTweets())
  }, [dispatch])

  // update tweets every pollInterval (milliseconds)
  useInterval(() => {
    if (!isPaused && pollInterval) {
      dispatch(updateTweets())
    }
  }, pollInterval)

  return orderedTweets
}

export default useLatestTweets
