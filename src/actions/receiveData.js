import { fetchCompanies, fetchServices } from "../api";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

function fetchPostsRequest() {
  return {
    type: FETCH_POST_REQUEST
  };
}

function fetchPostsSuccess(serviceTypes, companies) {
  return {
    type: FETCH_POST_SUCCESS,
    serviceTypes,
    companies
  };
}

function fetchPostsFailure(error) {
  return {
    type: FETCH_POST_REQUEST,
    message: error.message || "Something went wrong."
  };
}

export function handleInitialData() {
  return dispatch => {
    dispatch(fetchPostsRequest());

    return Promise.all([fetchServices(), fetchCompanies()])
      .then(([serviceTypes, companies]) => {
        dispatch(fetchPostsSuccess(serviceTypes, companies));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error));
      });
  };
}
