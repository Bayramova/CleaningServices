import { SET_CURRENT_USER } from '../actions/authActions';
// TODO загугли библиотеку lodash, он является дефакто стандартом и в ней есть куча полезных методов которые стоит использовать
const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
