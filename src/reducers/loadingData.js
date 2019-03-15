import { RECEIVE_DATA } from "../actions/getData";

const initialState = {
  loadingData: true,
  serviceTypes: {},
  companies: []
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        loadingData: false,
        serviceTypes: action.serviceTypes,
        companies: action.companies
      };
    default:
      return state;
  }
}
