import { combineReducers } from "redux";
import { loggedUserReducer } from './loggedUser';
import { createBrowserHistory } from 'history';
import { connectRouter } from "connected-react-router";
import { loadingBarReducer } from "react-redux-loading-bar";

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  loadingBar: loadingBarReducer,
  user: loggedUserReducer
});
export type RootState = ReturnType<typeof rootReducer>