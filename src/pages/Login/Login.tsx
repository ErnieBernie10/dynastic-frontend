import { Button } from "@chakra-ui/button";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "../../layout/Layout";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const handleClick = () => {
    loginWithRedirect();
  };

  return (
    <Layout>
      <Button onClick={handleClick}>Login</Button>
    </Layout>
  );
};

export default Login;
