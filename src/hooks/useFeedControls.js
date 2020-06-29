import { useDispatch, useSelector } from 'react-redux'

const useFeedControls = () => {
  let dispatch = useDispatch()
  let { isPaused } = useSelector((state) => state.tweets)

  const togglePause = () => {
    dispatch({ type: 'TOGGLE_PAUSE' })
  }

  return {
    isPaused,
    togglePause,
  }
}

export default useFeedControls
