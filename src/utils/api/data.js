import { fetchData } from "./fetch";

function fetchCompanies(page, limit, query = "") {
  return fetchData(`companies/${page}/${limit}/?q=${query}`);
}

function fetchServices() {
  return fetchData("services");
}

function fetchCompany(id) {
  return fetchData(`company/${id}`);
}

export { fetchCompanies, fetchServices, fetchCompany };
