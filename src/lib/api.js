import axios from 'axios'

function fetchTweets(params) {
  return new Promise((resolve) => {
    axios
      .get('https://magiclab-twitter-interview.herokuapp.com/hugo-brook/api', { params })
      .then((response) => {
        resolve({ data: response.data })
      })
      .catch((error) => {
        resolve({ error })
      })
  })
}

export { fetchTweets }
