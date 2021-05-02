import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <></>;
  } else if (isAuthenticated) {
    return <Redirect to="/dynasties" />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default Home;
