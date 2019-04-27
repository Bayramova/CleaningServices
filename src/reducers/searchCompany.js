import {
  FETCH_COMPANIES_REQUEST,
  FETCH_DATA_FAILURE
} from "actions/receiveData";
import {
  CLEAR_COMPANIES,
  SEARCH_COMPANIES_SUCCESS
} from "actions/searchCompanies";

const initialState = {
  loadingCompanies: false,
  companies: [],
  page: 1,
  hasMore: true,
  error: null
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case CLEAR_COMPANIES:
      return {
        ...state,
        companies: [],
        page: 1,
        hasMore: true
      };
    case FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loadingCompanies: true
      };
    case SEARCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loadingCompanies: false,
        companies: [...state.companies, ...action.companies],
        page: state.page + 1,
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
