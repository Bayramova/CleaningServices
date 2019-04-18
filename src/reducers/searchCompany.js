import {
  FETCH_COMPANIES_REQUEST,
  FETCH_DATA_FAILURE
} from "actions/receiveData";
import { SEARCH_COMPANIES_SUCCESS } from "actions/searchCompanies";

const initialState = {
  loadingCompanies: true,
  companies: [],
  page: 1,
  hasMore: true,
  error: null
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loadingCompanies: true
      };
    case SEARCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loadingCompanies: false,
        companies: action.companies,
        page: action.page,
        hasMore: action.hasMore,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingCompanies: false,
        error: action.message
      };
    default:
      return state;
  }
}
