import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/tailwind.generated.css";
import * as serviceWorker from "./serviceWorker";
import store from "./lib/store";
import LatestTweets from "./components/LatestTweets";
import Controls from "./components/Controls";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="wrapper" className="max-w-screen-sm m-auto">
        <Controls />
        <LatestTweets />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
