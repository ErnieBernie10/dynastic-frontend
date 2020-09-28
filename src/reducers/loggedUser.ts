import { User } from "../models/api/User";
import { AppAction, LOGIN } from "../actions";

const initialState: User = {
  email: "",
  firstname: "",
  id: "",
  lastname: "",
};

export const loggedUserReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case LOGIN + '_FULLFILLED':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
