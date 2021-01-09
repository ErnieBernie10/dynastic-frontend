
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Action } from "redux";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppAction<T = any> = {
  type: string;
  payload: T;
};
export type AsyncAction<T> = {
  type: string,
  payload: Promise<T>
}

