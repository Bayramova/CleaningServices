async function fetchData(resource, method, data) {
  const response = await fetch(`http://localhost:5000/api/${resource}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
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

function signUpUser(userData) {
  return fetchData("signup", "POST", userData);
}

function signInUser(userData) {
  return fetchData("signin", "POST", userData);
}

function updateUser(id, updates) {
  return fetchData(`user/${id}/edit`, "PUT", updates);
}

function getUser(id) {
  return fetchData(`user/${id}`);
}

export {
  fetchCompanies,
  fetchServices,
  signUpUser,
  signInUser,
  updateUser,
  getUser
};
