import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "PRODUCTION_URL" // Production url
    : "http://127.0.0.1:5000"; // Development url
const axiosApi = axios.create({
  baseURL,
});

export default axiosApi;
