import { CHANGE_FIELDS } from "actions/updateFieldsState";
import { SELECT_COMPANY } from "actions/makeOrder";

const initialState = {
  companyId: {
    value: ""
  },
  address: {
    value: ""
  },
  serviceType: {
    value: ""
  },
  bigRooms: {
    value: ""
  },
  smallRooms: {
    value: ""
  },
  bathrooms: {
    value: ""
  },
  daysOfCleaning: {
    value: []
  },
  startTimeOfCleaning: {
    value: ""
  },
  cleaningFrequency: {
    value: ""
  },
  phone: {
    value: ""
  }
};

export default function orderFormFields(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELDS:
      return {
        ...state,
        ...action.changedFields
      };
    case SELECT_COMPANY:
      return {
        ...state,
        companyId: {
          value: action.companyId
        }
      };
    default:
      return state;
  }
}
