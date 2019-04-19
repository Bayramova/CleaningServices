// import * as Actions from "../actions/socket";

// const initialState = {
//   companies: {},
//   isFetching: true,
//   error: null
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case Actions.GET_REQUEST_COMPANIES:
//       return {
//         ...state,
//         isFetching: true
//       };
//     case Actions.GET_SUCCESS_COMPANIES:
//       return {
//         ...state,
//         companies: action.data,
//         isFetching: false
//       };
//     case Actions.GET_FAILURE_COMPANIES:
//       console.log("Error: ", action.error);
//       return {
//         ...state,
//         error: action.error,
//         isFetching: false
//       };
//     default:
//       return state;
//   }
// };
