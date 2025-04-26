import { ApiError } from "@/type/TAPI";
import { checkAuth } from "@/utils/checkAuth";
import axios from "axios";

const core = axios.create({
  baseURL: "https://bccnewbie-production.up.railway.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
core.interceptors.request.use(async (config) => {
  const { token } = checkAuth();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
core.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError: ApiError = new Error(
      error.response?.data?.error || error.message
    );
    customError.status = error.response?.status;
    customError.code = error.response?.data?.code;
    customError.details = error.response?.data?.details;
    return Promise.reject(customError);
  }
);

export default core;
