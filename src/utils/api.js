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

function fetchCompanies(page) {
  return fetchData(`companies/${page}`);
}

function fetchServices() {
  return fetchData("services");
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

function fetchOrders(id) {
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

function fetchCompany(id) {
  return fetchData(`company/${id}`);
}

function getFeedbacks(id) {
  return fetchData(`company/${id}/feedbacks`);
}

function search(query) {
  return fetchData(`search?q=${query}`);
}

export {
  fetchCompanies,
  fetchServices,
  signUpUser,
  signInUser,
  updateUser,
  getUser,
  getUserFromToken,
  createOrder,
  fetchOrders,
  cancelOrder,
  changeStatus,
  postFeedback,
  getFeedbacks,
  search,
  fetchCompany
};
