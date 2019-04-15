import {
  signUpUser,
  signInUser,
  updateUser,
  getUser,
  getUserFromToken,
  createOrder,
  getOrders,
  cancelOrder,
  changeStatus,
  postFeedback,
  getFeedbacks
} from "utils/api";

export const GET_ERRORS = "GET_ERRORS";
export const DELETE_ERRORS = "DELETE_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";
export const GET_USER_DATA = "GET_USER_DATA";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";
export const MAKE_ORDER = "MAKE_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const CANCEL_ORDER = "CANCEL_ORDER";
export const CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS";
export const GET_FEEDBACKS = "GET_FEEDBACKS";

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

const getOrdersInfo = orders => {
  return {
    type: GET_ORDERS,
    orders
  };
};

const getFeedbacksInfo = feedbacks => {
  return {
    type: GET_FEEDBACKS,
    feedbacks
  };
};

const changeOrderStatusToCancelled = orderId => {
  return {
    type: CANCEL_ORDER,
    id: orderId
  };
};

const changeOrderStatus = orderId => {
  return {
    type: CHANGE_ORDER_STATUS,
    id: orderId
  };
};

export const signUp = (userData, history) => dispatch => {
  signUpUser(userData)
    .then(res => history.push("/signin"))
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const signIn = userData => dispatch => {
  signInUser(userData)
    .then(res => {
      const { token, user } = res;
      localStorage.setItem("token", token);
      dispatch(setCurrentUser(user));
      getUser(user.id).then(res => {
        const { userData } = res;
        dispatch(getUserData(userData));
      });
      getOrders(user.id).then(res => {
        dispatch(getOrdersInfo(res));
      });
    })
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const fetchOrdersInfo = userId => dispatch => {
  getOrders(userId).then(res => {
    dispatch(getOrdersInfo(res));
  });
};

export const fetchFeedbacksInfo = companyId => dispatch => {
  getFeedbacks(companyId).then(res => {
    dispatch(getFeedbacksInfo(res));
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
      getOrders(user.id).then(res => {
        dispatch(getOrdersInfo(res));
      });
    })
    .catch(err => {
      err.json().then(errorMessage => {
        dispatch(getErrors(errorMessage));
      });
    });
};

export const signOut = () => dispatch => {
  dispatch(unsetCurrentUser());
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

export const makeOrder = (data, history) => dispatch => {
  createOrder(data)
    .then(res => {
      history.goBack();
    })
    .catch(err => {
      console.log(err);
    });
};

export const cancelNewOrder = orderId => dispatch => {
  cancelOrder(orderId)
    .then(res => {
      dispatch(changeOrderStatusToCancelled(orderId));
    })
    .catch(err => {
      console.log(err);
    });
};

export const changeOrder = orderId => dispatch => {
  changeStatus(orderId)
    .then(res => {
      dispatch(changeOrderStatus(orderId));
    })
    .catch(err => {
      console.log(err);
    });
};

export const leaveFeedback = (data, history) => dispatch => {
  postFeedback(data)
    .then(res => {
      history.goBack();
    })
    .catch(err => {
      console.log(err);
    });
};
