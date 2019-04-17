import { FETCH_DATA_FAILURE } from "actions/receiveData";
import {
  FETCH_COMPANY_REQUEST,
  FETCH_COMPANY_SUCCESS,
  FETCH_FEEDBACKS_REQUEST,
  FETCH_FEEDBACKS_SUCCESS
} from "actions/receiveCompanyInfo";

const initialState = {
  loadingCompany: true,
  loadingFeedbacks: true,
  company: {},
  feedbacks: [],
  error: null
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANY_REQUEST:
      return {
        ...state,
        loadingCompany: true
      };
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        loadingCompany: false,
        company: action.company,
        error: null
      };
    case FETCH_FEEDBACKS_REQUEST:
      return {
        ...state,
        loadingFeedbacks: true
      };
    case FETCH_FEEDBACKS_SUCCESS:
      return {
        ...state,
        loadingFeedbacks: false,
        feedbacks: action.feedbacks
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingCompany: false,
        loadingFeedbacks: false,
        error: action.message
      };
    default:
      return state;
  }
}
