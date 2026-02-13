import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = import.meta.env.VITE_API_URL;

const headers = {
  "Content-Type": "application/json",
  "X-App-Version": "1.0.0",
  "X-Client-Info": "ReactApp/19.x.x",
  "X-Correlation-Id": `corr-${Date.now()}`,
};

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${Date.now()}`;
    // config.headers["X-Correlation-Id"] = `corr-${Date.now()}`;
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    // console.error("Response error:", error);

    if (error.response?.status === 404) {
      error.message =
        "Resource not found. Please check the URL and try again.- Interceptor";
    }

    if (error.response?.status === 500) {
      error.message =
        "Internal server error. Please try again later.- Interceptor";
    }
    return Promise.reject(error);
  },
);
