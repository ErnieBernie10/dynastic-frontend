import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import CreateMemberContainer from "./pages/Dynasty/CreateMember/CreateMemberContainer";
import DynastyContainer from "./pages/Dynasty/DynastyDashboard/DynastyContainer";
import Home from "./pages/Home/Home";
import LoginContainer from "./pages/Login/LoginContainer";
import TreeContainer from "./pages/Tree/TreeContainer";
import CreateDynastyContainer from "./pages/Dynasty/CreateDynasty/CreateDynastyContainer";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/dynasty/create"
          component={CreateDynastyContainer}
        />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/dynasty/:id/tree" component={TreeContainer} />
        <Route exact path="/dynasty/:id" component={DynastyContainer} />
        <Route
          exact
          path="/dynasty/:id/create/child"
          component={() => <CreateMemberContainer type="child" />}
        />
        <Route
          exact
          path="dynasty/:id/create/relationship"
          component={() => <CreateMemberContainer type="relationship" />}
        />
      </Switch>
    </BrowserRouter>
  );
};

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
