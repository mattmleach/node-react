import { userService } from "../services";
import { history } from "../utils";

export const userActions = {
  login,
  logout
};

export const userConstants = {
  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",
  LOGOUT: "USERS_LOGOUT"
};

function login(email, password) {
  return dispatch => {
    dispatch({ type: userConstants.LOGIN_REQUEST });

    userService.login(email, password).then(
      user => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, user });
        history.push("/");
      },
      err => {
        const errorMessage = err.toString();
        dispatch({ type: userConstants.LOGIN_FAILURE, errorMessage });
      }
    );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
