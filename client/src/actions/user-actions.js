import { userService } from "../services";
import { userConstants } from "../constants";
import { history } from "../utils";

export const userActions = {
    login,
    logout
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
