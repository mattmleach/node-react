import { userConstants } from "../actions";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggingIn: false, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { loggingIn: true };
    case userConstants.LOGIN_SUCCESS:
      return { loggingIn: false, user: action.user };
    case userConstants.LOGIN_FAILURE:
      return { loggingIn: false, errorMessage: action.errorMessage };
    case userConstants.LOGOUT:
      return { loggingIn: false };
    default:
      return state;
  }
}
