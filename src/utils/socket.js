import openSocket from "socket.io-client";
import jwtDecode from "jwt-decode";

const socket = openSocket("http://192.168.12.109:5000");
socket.connect();
if (localStorage.token) {
  socket.emit("userId", jwtDecode(localStorage.token).id);
}
export default socket;
