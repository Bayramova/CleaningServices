import { SET_CURRENT_USER, GET_ERRORS } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: {},
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
    case GET_ERRORS:
      return {
        ...state,
        authErrors: action.payload
      };
    default:
      return state;
  }
}
