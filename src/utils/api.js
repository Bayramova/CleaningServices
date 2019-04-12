async function fetchData(resource, method, data) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/${resource}`,
    {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

async function fetchProtectedData(resource, method, data) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/${resource}`,
    {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.token
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw response;
  }
  return response.json();
}

function fetchCompanies() {
  return fetchData("companies");
}

function fetchServices() {
  return fetchData("services");
}

function fetchClients() {
  return fetchData("clients");
}

function signUpUser(userData) {
  return fetchData("signup", "POST", userData);
}

function signInUser(userData) {
  return fetchData("signin", "POST", userData);
}

function updateUser(id, updates) {
  return fetchProtectedData(`user/${id}/edit`, "PUT", updates);
}

function getUser(id) {
  return fetchProtectedData(`user/${id}`);
}

async function getUserFromToken() {
  return fetchProtectedData("user/from/token");
}

function createOrder(orderData) {
  return fetchData("make_order", "POST", orderData);
}

function getOrders(id) {
  return fetchProtectedData(`user/${id}/orders`);
}

function cancelOrder(id) {
  return fetchProtectedData(`cancel/${id}`, "PUT");
}

function changeStatus(id) {
  return fetchProtectedData(`change_status/${id}`, "PUT");
}

function postFeedback(feedback) {
  return fetchProtectedData("leave_feedback", "POST", feedback);
}

function getFeedbacks(id) {
  return fetchData(`company/${id}/feedbacks`);
}

// TODO файлик растёт, есть смысл разбивать
export {
  fetchCompanies,
  fetchServices,
  fetchClients,
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
};
