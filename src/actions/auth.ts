import { LoginFormModel } from "../models/Login";
import auth from "../api/auth";
import { User } from "../models/api/User";
import { AsyncAction } from ".";

export const LOGIN = "LOGIN";
export const login = (body: LoginFormModel): AsyncAction<User> => {
  return {
    type: 'LOGIN',
    payload: auth.login(body)
  }
};