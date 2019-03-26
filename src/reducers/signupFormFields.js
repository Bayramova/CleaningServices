import { CHANGE_FIELDS } from "../actions/updateFieldsState";

const initialState = {
  email: {
    value: ""
  },
  password: {
    value: ""
  },
  confirm: {
    value: ""
  },
  phone: {
    value: ""
  },
  prefix: {
    value: ""
  }
};

export default function signupFormFields(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELDS:
      return {
        ...state,
        ...action.changedFields
      };
    default:
      return state;
  }
}
