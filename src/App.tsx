import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { User } from "./models/api/User";
import { Routes } from "./Routes";

interface UserContext {
  user?: User;
}

const defaultUserContext = {
  user: undefined,
};

const queryClient = new QueryClient();

export const UserContext = React.createContext<UserContext>(defaultUserContext);
function App() {
  return (
    <UserContext.Provider value={defaultUserContext}>
      <Auth0Provider
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ""}
        domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ""}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE ?? ""}
        redirectUri={window.location.origin}
      >
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Routes />
          </ChakraProvider>
        </QueryClientProvider>
      </Auth0Provider>
    </UserContext.Provider>
  );
}

export default App;
