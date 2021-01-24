import { ChakraProvider, theme } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Loading from "./components/Loading";
import { User } from "./models/api/User";
import { Routes } from "./Routes";

interface UserContext {
  user?: User;
}

const defaultUserContext = {
  user: undefined,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export const UserContext = React.createContext<UserContext>(defaultUserContext);
function App() {
  return (
    <UserContext.Provider value={defaultUserContext}>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <Routes />
          </ChakraProvider>
        </QueryClientProvider>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
