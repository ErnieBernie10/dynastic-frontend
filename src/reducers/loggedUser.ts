import { LoggedUser } from "../models/api/User";
import { AppAction, LOGIN } from "../actions";

const initialState: LoggedUser = {
  user: {
    email: "",
    firstname: "",
    id: "",
    lastname: "",
  },
  tokens: {
    access: {
      token: "",
      expires: ""
    },
    refresh: {
      token: "",
      expires: ""
    }
  }
};

export const loggedUserReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case LOGIN + '_FULFILLED':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
