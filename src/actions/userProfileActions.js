export const EDIT_INFO = "EDIT_PROFILE";
export const GET_USER_INFO = "GET_USER_INFO";

function editProfile(userData) {
  return {
    type: EDIT_INFO,
    userData
  };
}

// function getUserInfo(id) {
//   return {
//     type: GET_USER_INFO,
//     id: id
//   };
// }

export const updateUserInfo = (updates, history) => dispatch => {
  fetch("http://localhost:5000/api/user/profile/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  })
    .then(res => {
      dispatch(editProfile(updates));
    })
    .then(res => history.push("/user/profile"));
};

// export const getUser = id => dispatch => {
//   fetch("http://localhost:5000/api/signin", {
//     method: "Get",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(id)
//   })
//     .then(res => {
//       const { token } = res;
//       localStorage.setItem("jwtToken", token);
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       dispatch(setCurrentUser(decoded));
//     })
//     .then(res => history.push(`/user/profile`))
//     .catch(err => {
//       err.json().then(errorMessage => {
//         dispatch(getErrors(errorMessage));
//       });
//     });
// };
