import { CHANGE_FIELDS } from "../actions/updateFieldsState";

// todo надо ли такая структура? возможно достаточно address: '', serviceType: ''
const initialState = {
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
  },
  prefix: {
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
    default:
      return state;
  }
}
