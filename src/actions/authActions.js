import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const GET_ERRORS = "GET_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

function getErrors(error) {
  return {
    type: GET_ERRORS,
    payload: error.response.body
  };
}

export const registerUser = (userData, history) => dispatch => {
  fetch("/api/signup", {
    method: "POST",
    body: userData
  })
    .then(res => history.push("/signin"))
    .catch(err => {
      dispatch(getErrors(err));
    });
};

export const loginUser = userData => dispatch => {
  fetch("/api/signin", {
    method: "POST",
    body: userData
  })
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(getErrors(err));
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
