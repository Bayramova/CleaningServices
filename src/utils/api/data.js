import { fetchData } from "./fetch";

function fetchCompanies(page, limit) {
  return fetchData(`companies/${page}/${limit}`);
}

function fetchServices() {
  return fetchData("services");
}

function fetchCompany(id) {
  return fetchData(`company/${id}`);
}

export { fetchCompanies, fetchServices, fetchCompany };
