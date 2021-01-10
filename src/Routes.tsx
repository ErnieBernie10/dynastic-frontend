import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import CreateMemberContainer from "./pages/Dynasty/CreateMemberContainer";
import DynastyContainer from "./pages/Dynasty/DynastyContainer";
import TreeContainer from "./pages/Tree/TreeContainer";
import { history } from "./reducers";

export const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/tree" component={TreeContainer} />
        <Route exact path="/dynasty" component={DynastyContainer} />
        <Route
          exact
          path="/dynasty/members/create"
          component={CreateMemberContainer}
        />
      </Switch>
    </ConnectedRouter>
  );
};
