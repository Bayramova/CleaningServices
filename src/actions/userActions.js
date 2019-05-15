import { updateUser, getUser } from "utils/api/user";
import {
  signUpUser,
  verifyEmail,
  signInUser,
  getUserFromToken
} from "utils/api/auth";
import { postFeedback } from "utils/api/feedbacks";
import Toast from "popup-messages";
import "popup-messages/css/index.css";
import jwtDecode from "jwt-decode";
import socket from "utils/socket";

// export const VALIDATE_EMAIL = "VALIDATE_EMAIL";
// export const VALIDATE_EMAIL_SUCCESS = "VALIDATE_EMAIL_SUCCESS";
// export const VERIFY_EMAIL_FAILURE = "VERIFY_EMAIL_FAILURE";
export const SIGNUP_USER_REQUEST = "SIGNUP_USER_REQUEST";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";
export const RESET_USER = "RESET_USER";
export const GET_ERRORS = "GET_ERRORS";
export const DELETE_ERRORS = "DELETE_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";
export const GET_USER_DATA = "GET_USER_DATA";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";

// export const validateEmail = () => {
//   return {
//     type: VALIDATE_EMAIL
//   };
// };

// export const verifyEmailFailure = error => {
//   return {
//     type: VERIFY_EMAIL_FAILURE,
//     message: error
//   };
// };

export function signUpUserRequest() {
  return {
    type: SIGNUP_USER_REQUEST
  };
}

export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    user: user
  };
}

const getErrors = error => {
  return {
    type: GET_ERRORS,
    error: error
  };
};

export const deleteErrors = () => {
  return {
    type: DELETE_ERRORS
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const setCurrentUser = userData => {
  return {
    type: SET_CURRENT_USER,
    user: userData
  };
};

export const unsetCurrentUser = () => {
  return {
    type: UNSET_CURRENT_USER
  };
};

const getUserData = userData => {
  return {
    type: GET_USER_DATA,
    userData
  };
};

const updateUserData = (id, updates) => {
  return {
    type: UPDATE_USER_DATA,
    id,
    updates
  };
};

export const signUp = userData => dispatch => {
  dispatch(signUpUserRequest());
  signUpUser(userData)
    .then(res => {
      dispatch(signUpUserSuccess(res.user));
      new Toast(res.message, "info").show(Toast.toastsContainer);
    })
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const validateEmail = (verificationToken, history) => dispatch => {
  dispatch(setUserLoading());

  verifyEmail(verificationToken)
    .then(res => {
      const { token, user } = res;
      socket.emit("join", jwtDecode(token).id);
      localStorage.setItem("token", token);
      dispatch(setCurrentUser(user));
      getUser(user.id).then(res => {
        const { userData } = res;
        dispatch(getUserData(userData));
        history.push(`/user/${user.id}`);
      });
    })
    .catch(err => {
      console.log(err);
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const signIn = userData => dispatch => {
  signInUser(userData)
    .then(res => {
      const { token, user } = res;
      socket.emit("join", jwtDecode(token).id);
      localStorage.setItem("token", token);
      dispatch(setCurrentUser(user));
      getUser(user.id).then(res => {
        const { userData } = res;
        dispatch(getUserData(userData));
      });
    })
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const getUserDataFromToken = () => dispatch => {
  dispatch(setUserLoading());

  getUserFromToken()
    .then(res => {
      const { user } = res;
      dispatch(setCurrentUser(user));
      getUser(user.id).then(res => {
        const { userData } = res;
        dispatch(getUserData(userData));
      });
    })
    .catch(err => {
      console.log(err);
      new Toast(err, "error").show(Toast.toastsContainer);
    });
};

export const signOut = () => dispatch => {
  dispatch(unsetCurrentUser());
  socket.emit("leave", jwtDecode(localStorage.token).id);
  localStorage.removeItem("token");
};

export const update = (id, updates, history) => dispatch => {
  updateUser(id, updates)
    .then(res => {
      dispatch(updateUserData(id, updates));
    })
    .then(res => history.push(`/user/${id}`))
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const leaveFeedback = (data, history) => dispatch => {
  postFeedback(data)
    .then(res => {
      history.goBack();
    })
    .catch(err => {
      console.log(err);
      new Toast(err, "error").show(Toast.toastsContainer);
    });
};
