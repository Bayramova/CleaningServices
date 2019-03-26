import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/receiveData";
import { SORT_COMPANIES } from "../actions/sortCompanies";

const initialState = {
  loadingData: true,
  serviceTypes: [],
  companies: [],
  error: null
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loadingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        serviceTypes: action.serviceTypes,
        companies: action.companies,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingData: false,
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
