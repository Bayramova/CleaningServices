import { SET_CURRENT_USER } from "actions/authActions";
import { EDIT_INFO } from "actions/userProfileActions";
const isEmpty = require("lodash.isempty");

const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    role: "",
    email: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.token),
        user: action.user
      };
    case EDIT_INFO:
      return {
        ...state,
        user: action.userData
      };
    default:
      return state;
  }
}
