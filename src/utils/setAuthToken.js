import dotenv from "dotenv";
dotenv.config();
const fetchDefaults = require("fetch-defaults");

const setAuthToken = token => {
  fetchDefaults(fetch, process.env.REACT_APP_API_URL, {
    headers: { "x-access-token": token }
  });
};

export default setAuthToken;
