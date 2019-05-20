import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  GET_ERRORS,
  DELETE_ERRORS,
  GET_USER_DATA,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  USER_LOADING
} from "actions/userActions";
import {
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  CANCEL_ORDER,
  CHANGE_ORDER_STATUS,
  SORT_ORDERS
} from "actions/orderActions";
import { FETCH_DATA_FAILURE } from "actions/receiveData";

const initialState = {
  isAuthenticated: false,
  errors: {},
  loadingUser: false,
  sendingEmail: false,
  isEmailSent: false,
  userData: {
    id: "",
    email: "",
    role: ""
  },
  additionalUserData: {},
  userOrders: {
    loadingOrders: false,
    orders: [],
    error: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        sendingEmail: true,
        userData: {
          id: "",
          role: "",
          email: ""
        }
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        sendingEmail: false,
        isEmailSent: true,
        userData: action.user
      };
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
        sendingEmail: false,
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
    case UPDATE_USER_DATA_REQUEST:
      return {
        ...state,
        sendingEmail: true,
        isEmailSent: false
      };
    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        sendingEmail: false,
        isEmailSent: true
      };
    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        userOrders: {
          ...state.userOrders,
          loadingOrders: true
        }
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        userOrders: {
          ...state.userOrders,
          loadingOrders: false,
          orders: action.orders
        }
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        userOrders: {
          ...state.userOrders,
          loadingOrders: false,
          error: action.message
        }
      };
    case CANCEL_ORDER:
      const updatedOrderList = state.userOrders.orders.map(order => {
        if (order.id === action.id) {
          order.status = "CANCELLED";
        }
        return order;
      });
      return {
        ...state,
        userOrders: {
          ...state.userOrders,
          orders: updatedOrderList
        }
      };
    case CHANGE_ORDER_STATUS:
      const updatedOrdersList = state.userOrders.orders.map(order => {
        if (order.id === action.id && order.status === "NEW") {
          order.status = "CONFIRMED";
        } else if (order.id === action.id && order.status === "CONFIRMED") {
          order.status = "DONE";
        }
        return order;
      });
      return {
        ...state,
        userOrders: {
          ...state.userOrders,
          orders: updatedOrdersList
        }
      };
    case SORT_ORDERS:
      const sortedOrdersList = [...state.userOrders.orders].sort(
        (order1, order2) =>
          action.sortBy === "newest"
            ? Date.parse(order2.createdAt) - Date.parse(order1.createdAt)
            : Date.parse(order1.createdAt) - Date.parse(order2.createdAt)
      );
      return {
        ...state,
        userOrders: {
          ...state.userOrders,
          orders: sortedOrdersList
        }
      };
    default:
      return state;
  }
}
