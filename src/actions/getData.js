import { fetchCompanies, fetchServices } from "../api";

export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(serviceTypes, companies) {
  return {
    type: RECEIVE_DATA,
    serviceTypes,
    companies
  };
}

export function handleInitialData() {
  return dispatch => {
    return Promise.all([fetchServices(), fetchCompanies()]).then(
      ([serviceTypes, companies]) => {
        dispatch(receiveData(serviceTypes, companies));
      }
    );
  };
}
