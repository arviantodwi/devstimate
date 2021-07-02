import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "./app/store";
import GlobalStyle from "./app/globalStyle";
import * as serviceWorker from "./serviceWorker";
import DefaultReactApp from "./views/default-react-app";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/default-react-app">
            <DefaultReactApp />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
