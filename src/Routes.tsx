import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateMemberContainer from "./pages/Dynasty/CreateMemberContainer";
import DynastyContainer from "./pages/Dynasty/DynastyContainer";
import Home from "./pages/Home/Home";
import TreeContainer from "./pages/Tree/TreeContainer";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tree" component={TreeContainer} />
        <Route exact path="/dynasty/:id" component={DynastyContainer} />
        <Route
          exact
          path="/dynasty/:id/create"
          component={CreateMemberContainer}
        />
      </Switch>
    </BrowserRouter>
  );
};
