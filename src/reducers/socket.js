import * as Actions from "../actions/socket";

const initialState = {
  orders: {},
  isFetching: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_REQUEST_ORDERS:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_SUCCESS_ORDERS:
      return {
        ...state,
        orders: action.data,
        isFetching: false
      };
    case Actions.GET_FAILURE_ORDERS:
      console.log("Error: ", action.error);
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};
