import { fetchCompanies, fetchServices } from "utils/api";

export const FETCH_SERVICES_REQUEST = "FETCH_SERVICES_REQUEST";
export const FETCH_COMPANIES_REQUEST = "FETCH_COMPANIES_REQUEST";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS";
export const FETCH_COMPANIES_SUCCESS = "FETCH_COMPANIES_SUCCESS";

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    message: error.message || "Something went wrong."
  };
};

const fetchServicesRequest = () => {
  return {
    type: FETCH_SERVICES_REQUEST
  };
};

const fetchServicesSuccess = services => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    services
  };
};

export const fetchCompaniesRequest = () => {
  return {
    type: FETCH_COMPANIES_REQUEST
  };
};

export const fetchCompaniesSuccess = companies => {
  return {
    type: FETCH_COMPANIES_SUCCESS,
    companies
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

export const getCompaniesData = page => dispatch => {
  dispatch(fetchCompaniesRequest());

  fetchCompanies(page)
    .then(companies => {
      dispatch(fetchCompaniesSuccess(companies));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
