import { orderBy } from "lodash/fp";

import { fetchTweets } from "./api";
import { convertArrayToObject } from "./helpers";

function updateTweets() {
  return async (dispatch, getState) => {
    let params = { count: 20 };
    let { tweets } = getState();
    let latestTweet = orderBy(["timeStamp"], ["desc"])(tweets.byId)[0];

    // fetch tweets since latest tweet id
    if (latestTweet) {
      params = { count: 50, afterId: latestTweet.id };
    }

    let { data } = await fetchTweets(params);

    if (data) {
      let tweetsById = convertArrayToObject(data, "id");

      dispatch({ type: "ADD_TWEETS", payload: tweetsById });
    }
  };
}

function fetchOlderTweets(oldestTweetId) {
  return async dispatch => {
    if (oldestTweetId) {
      let params = { count: 10, direction: -1, beforeId: oldestTweetId };

      let { data } = await fetchTweets(params);

      if (data) {
        let tweetsById = convertArrayToObject(data, "id");

        dispatch({ type: "ADD_TWEETS", payload: tweetsById });
      }
    }
  };
}

export { fetchOlderTweets, updateTweets };
