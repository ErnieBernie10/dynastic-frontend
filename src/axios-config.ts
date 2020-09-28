import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "PRODUCTION_URL" // Production url
    : "http://localhost:9000"; // Development url
const axiosApi = axios.create({
  baseURL,
});

export default axiosApi;
