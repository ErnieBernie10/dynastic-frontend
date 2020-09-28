import { combineReducers } from "redux";
import { loggedUserReducer } from './loggedUser';

export const rootReducer = combineReducers({
  user: loggedUserReducer
});
export type RootState = ReturnType<typeof rootReducer>