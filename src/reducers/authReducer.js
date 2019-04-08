import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  GET_ERRORS,
  DELETE_ERRORS,
  GET_USER_DATA,
  UPDATE_USER_DATA,
  USER_LOADING,
  GET_ORDERS,
  CANCEL_ORDER,
  CHANGE_ORDER_STATUS
} from "actions/userActions";

const initialState = {
  isAuthenticated: false,
  errors: {},
  loadingUser: false,
  userData: {
    id: "",
    email: "",
    role: ""
  },
  additionalUserData: {},
  orders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loadingUser: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        loadingUser: false,
        userData: action.user
      };
    case UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        userData: {
          id: "",
          role: "",
          email: ""
        }
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.error
      };
    case DELETE_ERRORS:
      return {
        ...state,
        errors: {}
      };
    case GET_USER_DATA:
      return {
        ...state,
        additionalUserData: action.userData
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.userData,
        additionalUserData: action.additionalUserData
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.orders
      };
    case CANCEL_ORDER:
      const updatedOrderList = state.orders.map(order => {
        if (order.id === action.id) {
          order.status = "cancelled";
        }
      });
      return {
        ...state,
        orders: updatedOrderList
      };
    case CHANGE_ORDER_STATUS:
      const updatedOrdersList = state.orders.map(order => {
        if (order.id === action.id && order.status === "new") {
          order.status = "confirmed";
        } else {
          order.status = "done";
        }
      });
      return {
        ...state,
        orders: updatedOrdersList
      };
    default:
      return state;
  }
}
