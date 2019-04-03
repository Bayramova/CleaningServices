import { fetchCompanies, fetchServices } from "../utils/fetch";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

function fetchDataSuccess(serviceTypes, companies) {
  return {
    type: FETCH_DATA_SUCCESS,
    serviceTypes,
    companies
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

    return Promise.all([fetchServices(), fetchCompanies()])
      .then(([serviceTypes, companies]) => {
        dispatch(fetchDataSuccess(serviceTypes, companies));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
}
