import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Article from "./Article";
import useLatestTweets from "../hooks/useLatestTweets";
import useFeedControls from "../hooks/useFeedControls";
import useScrollPosition from "../hooks/useScrollPosition";
import { fetchOlderTweets } from "../lib/actions";

const LatestTweets = () => {
  let tweets = useLatestTweets({ pollInterval: 2000 });
  let { pauseUpdates, resumeUpdates } = useFeedControls();
  let { isAtTop, isAtBottom } = useScrollPosition();
  let dispatch = useDispatch();

  useEffect(() => {
    if (!isAtTop) {
      pauseUpdates();
    } else {
      resumeUpdates();
    }

    if (isAtBottom) {
      console.log("dispatching ...");
      dispatch(fetchOlderTweets(tweets[tweets.length - 1].id));
    }
  }, [isAtTop, isAtBottom]);

  return (
    <React.Fragment>
      {tweets?.map(tweet => <Article key={tweet.id} {...tweet} />)}
    </React.Fragment>
  );
};

export default LatestTweets;
