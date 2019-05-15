import { fetchData, fetchProtectedData } from "./fetch";

function signUpUser(userData) {
  return fetchData("signup", "POST", userData);
}

function verifyEmail(verificationToken) {
  return fetchData(`verifyEmail/${verificationToken}`);
}

function signInUser(userData) {
  return fetchData("signin", "POST", userData);
}

function getUser(id) {
  return fetchProtectedData(`user/${id}`);
}

async function getUserFromToken() {
  return fetchProtectedData("user/from/token");
}

export { signUpUser, verifyEmail, signInUser, getUser, getUserFromToken };
