import { fetchDataFailure } from "./receiveData";
import {
  makeOrder,
  fetchOrders,
  cancelOrder,
  changeStatus
} from "utils/api/orders";
import Toast from "popup-messages";
import "popup-messages/css/index.css";

export const SELECT_COMPANY = "SELECT_COMPANY";
export const FETCH_ORDERS_REQUEST = "FETCH_ORDERS_REQUEST";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const CANCEL_ORDER = "CANCEL_ORDER";
export const CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS";

export const selectCompany = companyId => {
  return {
    type: SELECT_COMPANY,
    companyId
  };
};

const fetchOrdersRequest = () => {
  return {
    type: FETCH_ORDERS_REQUEST
  };
};

const fetchOrdersSuccess = orders => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders
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

export const order = (data, history) => dispatch => {
  makeOrder(data)
    .then(res => {
      history.goBack();
    })
    .catch(err => {
      new Toast(err, "error").show(Toast.toastsContainer);
    });
};

export const getOrdersData = userId => dispatch => {
  dispatch(fetchOrdersRequest());

  fetchOrders(userId)
    .then(orders => {
      dispatch(fetchOrdersSuccess(orders));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};

export const cancelNewOrder = orderId => dispatch => {
  cancelOrder(orderId)
    .then(res => {
      dispatch(changeOrderStatusToCancelled(orderId));
    })
    .catch(err => {
      new Toast(err, "error").show(Toast.toastsContainer);
    });
};

export const editOrderStatus = orderId => dispatch => {
  changeStatus(orderId)
    .then(res => {
      dispatch(changeOrderStatus(orderId));
    })
    .catch(err => {
      new Toast(err, "error").show(Toast.toastsContainer);
    });
};
