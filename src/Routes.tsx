import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import DynastyContainer from "./pages/Dynasty/Dynasty/DynastyContainer";
import Home from "./pages/Home/Home";
import TreeContainer from "./pages/Tree/TreeContainer";
import ListDynastiesContainer from "./pages/Dynasty/ListDynasties/ListDynastiesContainer";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/dynasties"
          component={ListDynastiesContainer}
        />
        <ProtectedRoute
          exact
          path="/dynasty/:id/tree"
          component={TreeContainer}
        />
        <ProtectedRoute
          exact
          path="/dynasty/:id"
          component={DynastyContainer}
        />
      </Switch>
    </BrowserRouter>
  );
};

const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading) {
          return <>Loading...</>;
        } else if (isAuthenticated) {
          return Component ? <Component {...props} /> : null;
        } else {
          loginWithRedirect();
        }
      }}
    />
  );
};
