import { fetchCompany } from "utils/api/data";
import { getFeedbacks } from "utils/api/feedbacks";
import { fetchDataFailure } from "./receiveData";

export const FETCH_COMPANY_REQUEST = "FETCH_COMPANY_REQUEST";
export const FETCH_COMPANY_SUCCESS = "FETCH_COMPANY_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_FEEDBACKS_REQUEST = "FETCH_FEEDBACKS_REQUEST";
export const FETCH_FEEDBACKS_SUCCESS = "FETCH_FEEDBACKS_SUCCESS";

const fetchCompanyRequest = () => {
  return {
    type: FETCH_COMPANY_REQUEST
  };
};

const fetchCompanySuccess = company => {
  return {
    type: FETCH_COMPANY_SUCCESS,
    company
  };
};

const fetchFeedbacksRequest = () => {
  return {
    type: FETCH_FEEDBACKS_REQUEST
  };
};

const fetchFeedbacksSuccess = feedbacks => {
  return {
    type: FETCH_FEEDBACKS_SUCCESS,
    feedbacks
  };
};

export const getCompanyData = companyId => dispatch => {
  dispatch(fetchCompanyRequest());

  fetchCompany(companyId)
    .then(company => {
      dispatch(fetchCompanySuccess(company));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};

export const fetchFeedbacksInfo = companyId => dispatch => {
  dispatch(fetchFeedbacksRequest());

  getFeedbacks(companyId)
    .then(feedbacks => {
      dispatch(fetchFeedbacksSuccess(feedbacks));
    })
    .catch(error => {
      dispatch(fetchDataFailure(error));
    });
};
