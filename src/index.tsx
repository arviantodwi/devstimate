import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import GlobalStyle from "./app/globalStyle";
import * as serviceWorker from "./serviceWorker";
import DefaultReactApp from "./layouts/DefaultReactApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />

      <DefaultReactApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
