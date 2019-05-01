import {
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_DATA_FAILURE
} from "actions/receiveData";
import { SORT_COMPANIES } from "actions/sortCompanies";

const initialState = {
  loadingCompanies: false,
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
    case FETCH_COMPANIES_SUCCESS:
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
    case SORT_COMPANIES:
      const sortedCompaniesList = [...state.companies].sort(
        (company1, company2) =>
          company2[action.sortBy] - company1[action.sortBy]
      );
      return {
        ...state,
        companies: sortedCompaniesList
      };
    default:
      return state;
  }
}
