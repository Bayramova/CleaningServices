import { RECEIVE_DATA } from "../actions/receiveData";
import { SORT_COMPANIES } from "../actions/sortCompanies";

const initialState = {
  loadingData: true,
  serviceTypes: {},
  companies: []
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        loadingData: false,
        serviceTypes: action.serviceTypes,
        companies: action.companies
      };
    case SORT_COMPANIES:
      // todo зачем [...state.companies] ?
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
