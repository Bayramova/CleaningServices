import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_DATA_FAILURE
} from "actions/receiveData";

const initialState = {
  loadingServices: true,
  services: [],
  error: null
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        loadingServices: true
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        loadingServices: false,
        services: action.services,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingServices: false,
        error: action.message
      };
    default:
      return state;
  }
}
