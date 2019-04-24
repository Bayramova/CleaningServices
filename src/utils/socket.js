import openSocket from "socket.io-client";
import jwtDecode from "jwt-decode";

const socket = openSocket(`${process.env.REACT_APP_API_URL}`);
socket.connect();
if (localStorage.token) {
  socket.emit("userId", jwtDecode(localStorage.token).id);
}
export default socket;
