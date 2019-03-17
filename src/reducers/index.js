import { combineReducers } from 'redux';

import data from './data';
import orderFormFields from './orderFormFields';

export default combineReducers({
  data,
  orderFormFields
});
