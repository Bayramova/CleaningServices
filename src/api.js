async function fetchData(resource) {
  const response = await fetch(`/api/${resource}`);
  return response.json();
}

function fetchCompanies() {
  return fetchData("companies");
}

function fetchServices() {
  return fetchData("services");
}

export { fetchCompanies, fetchServices };
