import { signUp, signIn } from "utils/fetch";

export const GET_ERRORS = "GET_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (token, userData) => {
  return {
    type: SET_CURRENT_USER,
    token: token,
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

export const signInUser = (userData, history) => dispatch => {
  signIn(userData)
    .then(res => {
      const { token, user } = res;
      localStorage.setItem("jwtToken", token);
      dispatch(setCurrentUser(token, user));
    })
    .then(res => history.push(`/user/profile`))
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const signOutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser(""));
};
