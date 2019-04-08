import { fetchCompanies, fetchServices, fetchClients } from "utils/api";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

function fetchDataSuccess(serviceTypes, companies, clients) {
  return {
    type: FETCH_DATA_SUCCESS,
    serviceTypes,
    companies,
    clients
  };
}

function fetchDataFailure(error) {
  return {
    type: FETCH_DATA_FAILURE,
    message: error.message || "Something went wrong."
  };
}

export function handleInitialData() {
  return dispatch => {
    dispatch(fetchDataRequest());

    return Promise.all([fetchServices(), fetchCompanies(), fetchClients()])
      .then(([serviceTypes, companies, clients]) => {
        dispatch(fetchDataSuccess(serviceTypes, companies, clients));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
}
