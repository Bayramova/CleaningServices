export const GET_REQUEST_ORDERS = "GET_REQUEST_ORDERS";
export const GET_SUCCESS_ORDERS = "GET_SUCCESS_ORDERS";
export const GET_FAILURE_ORDERS = "GET_FAILURE_ORDERS";

export const getRequestOrders = () => ({
  type: GET_REQUEST_ORDERS
});

export const getSuccessOrders = data => {
  return {
    type: GET_SUCCESS_ORDERS,
    data
  };
};

export const getFailureOrders = err => ({
  type: GET_FAILURE_ORDERS,
  err
});

export const getOrders = options => async dispatch => {
  dispatch(getRequestOrders());
  const { socket } = options;
  delete options.socket;
  try {
    socket.emit(GET_REQUEST_ORDERS, options);
  } catch (err) {
    dispatch(getFailureOrders(err));
  }
};
