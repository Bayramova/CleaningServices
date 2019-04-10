import { fetchCompanies, fetchServices, fetchClients } from "utils/api";

export const FETCH_SERVICES_REQUEST = "FETCH_SERVICES_REQUEST";
export const FETCH_COMPANIES_REQUEST = "FETCH_COMPANIES_REQUEST";
export const FETCH_CLIENTS_REQUEST = "FETCH_CLIENTS_REQUEST";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS";
export const FETCH_COMPANIES_SUCCESS = "FETCH_COMPANIES_SUCCESS";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";

const fetchServicesRequest = () => {
  return {
    type: FETCH_SERVICES_REQUEST
  };
};

const fetchCompaniesRequest = () => {
  return {
    type: FETCH_COMPANIES_REQUEST
  };
};

const fetchClientsRequest = () => {
  return {
    type: FETCH_CLIENTS_REQUEST
  };
};

const fetchServicesSuccess = services => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    services
  };
};

const fetchCompaniesSuccess = companies => {
  return {
    type: FETCH_COMPANIES_SUCCESS,
    companies
  };
};

const fetchClientsSuccess = clients => {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    clients
  };
};

const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    message: error.message || "Something went wrong."
  };
};

export const getServicesData = () => dispatch => {
  dispatch(fetchServicesRequest());

  fetchServices()
    .then(services => {
      dispatch(fetchServicesSuccess(services));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};

export const getCompaniesData = () => dispatch => {
  dispatch(fetchCompaniesRequest());

  fetchCompanies()
    .then(companies => {
      dispatch(fetchCompaniesSuccess(companies));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};

export const getClientsData = () => dispatch => {
  dispatch(fetchClientsRequest());

  fetchClients()
    .then(clients => {
      dispatch(fetchClientsSuccess(clients));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
