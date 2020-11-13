import axios from "axios";

const api = axios.create({
  baseURL: "https://de4245f4db94.ngrok.io",
});

export default api;
