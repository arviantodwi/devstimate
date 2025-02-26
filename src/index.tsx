import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./i18n";
import Router from "./router";
import { store } from "./app/store";
import GlobalStyle from "./app/globalStyle";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
