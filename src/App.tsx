import { ChakraProvider, theme } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
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
const queryCache = new QueryCache();
export const UserContext = React.createContext<UserContext>(defaultUserContext);
function App() {
  return (
    <UserContext.Provider value={defaultUserContext}>
      <Suspense fallback={<Loading />}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <ChakraProvider theme={theme}>
            <Routes />
          </ChakraProvider>
        </ReactQueryCacheProvider>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
