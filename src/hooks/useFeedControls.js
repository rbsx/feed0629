import { useDispatch, useSelector } from "react-redux";

const useFeedControls = () => {
  let dispatch = useDispatch();
  let { isPaused } = useSelector(state => state.tweets);

  const togglePause = () => {
    dispatch({ type: "TOGGLE_PAUSE" });
  };

  const pauseUpdates = () => {
    dispatch({ type: "PAUSE_UPDATES" });
  };

  const resumeUpdates = () => {
    dispatch({ type: "RESUME_UPDATES" });
  };

  return {
    isPaused,
    togglePause,
    pauseUpdates,
    resumeUpdates
  };
};

export default useFeedControls;
