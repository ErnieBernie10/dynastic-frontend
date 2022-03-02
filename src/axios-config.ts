import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "production"
    ? "PRODUCTION_URL" // Production url
    : "http://127.0.0.1:5000"; // Development url
const axiosApi = axios.create({
  baseURL,
});

axiosApi.interceptors.request.use((config) => {
  // TODO add bearer token from auth0
  const token = "";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosApi;
