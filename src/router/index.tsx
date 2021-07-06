import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../views/landing";
import DefaultReactApp from "../views/default-react-app";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>

      <Route path="/planner">
        <h1>Planner</h1>
      </Route>

      <Route path="/default-react-app">
        <DefaultReactApp />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
