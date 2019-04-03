import {
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  GET_ERRORS,
  DELETE_ERRORS,
  GET_USER_DATA,
  UPDATE_USER_DATA
} from "actions/userActions";

const initialState = {
  isAuthenticated: false,
  errors: {},
  userData: {
    id: "",
    email: "",
    role: ""
  },
  additionalUserData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(action.user);
      return {
        ...state,
        isAuthenticated: true,
        userData: action.user
      };
    case UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        userData: {
          id: "",
          role: "",
          email: ""
        }
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.error
      };
    case DELETE_ERRORS:
      return {
        ...state,
        errors: {}
      };
    case GET_USER_DATA:
      return {
        ...state,
        additionalUserData: action.userData
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        additionalUserData: action.userData
      };
    default:
      return state;
  }
}
