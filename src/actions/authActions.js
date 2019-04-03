import { signUp, signIn } from "../utils/fetch";

export const GET_ERRORS = "GET_ERRORS";
export const DELETE_ERRORS = "DELETE_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";

export function unsetCurrentUser() {
  return {
    type: UNSET_CURRENT_USER
  };
}

export function deleteErrors() {
  return {
    type: DELETE_ERRORS
  };
}

export const setCurrentUser = userData => {
  return {
    type: SET_CURRENT_USER,
    user: userData
  };
};

function getErrors(error) {
  return {
    type: GET_ERRORS,
    error: error
  };
}

export const signUpUser = (userData, history) => dispatch => {
  signUp(userData)
    .then(res => history.push("/signin"))
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const signInUser = userData => dispatch => {
  signIn(userData)
    .then(res => {
      const { user } = res;
      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);
      dispatch(setCurrentUser(user));
    })
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const signOutUser = () => dispatch => {
  dispatch(unsetCurrentUser());
};
