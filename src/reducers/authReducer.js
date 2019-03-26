import {
  SET_CURRENT_USER,
  USER_LOADING,
  GET_ERRORS
} from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: {},
  loadingUser: false,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loadingUser: true
      };
    case GET_ERRORS:
      return {
        ...state,
        authErrors: action.payload
      };
    default:
      return state;
  }
}
