import { fetchData, fetchProtectedData } from "./fetch";

function makeOrder(orderData) {
  return fetchData("make_order", "POST", orderData);
}

function fetchOrders(id) {
  return fetchProtectedData(`user/${id}/orders`);
}

function cancelOrder(id) {
  return fetchProtectedData(`cancel/${id}`, "PUT");
}

function changeStatus(id) {
  return fetchProtectedData(`change_status/${id}`, "PUT");
}

export { makeOrder, fetchOrders, cancelOrder, changeStatus };
