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
import LoginContainer from "./pages/Login/LoginContainer";
import TreeContainer from "./pages/Tree/TreeContainer";
import ListDynastiesContainer from "./pages/Dynasty/ListDynasties/ListDynastiesContainer";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dynasties" component={ListDynastiesContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/dynasty/:id/tree" component={TreeContainer} />
        <Route exact path="/dynasty/:id" component={DynastyContainer} />
      </Switch>
    </BrowserRouter>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          Component ? (
            <Component {...props} />
          ) : null
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
