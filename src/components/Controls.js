import React from 'react'

import useFeedControls from '../hooks/useFeedControls'

const LatestTweets = () => {
  let { isPaused, togglePause } = useFeedControls()

  return (
    <div className="max-w-screen-sm m-auto p-6 flex flex-row">
      <p className="flex-1 text-gray-700">Auto-update</p>
      {isPaused ? (
        <button
          onClick={togglePause}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py- px-4 rounded self-end"
        >
          off
        </button>
      ) : (
        <button
          onClick={togglePause}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py- px-4 rounded self-end"
        >
          on
        </button>
      )}
    </div>
  )
}

export default LatestTweets
