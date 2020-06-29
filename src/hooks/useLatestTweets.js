import { useCallback } from "react";
import { orderBy } from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";

import useInterval from "./useInterval";
import { updateTweets } from "../lib/actions";

const useLatestTweets = ({ pollInterval }) => {
  let dispatch = useDispatch();
  let { byId, isPaused } = useSelector(state => state.tweets);
  let orderedTweets = orderBy(["timeStamp"], ["desc"])(byId);

  let runUpdate = useCallback(() => {
    if (!isPaused && pollInterval) {
      dispatch(updateTweets());
    }
  }, [dispatch, pollInterval, isPaused]);

  // update tweets every pollInterval (milliseconds)
  useInterval(runUpdate, pollInterval);

  return orderedTweets;
};

export default useLatestTweets;
