import { LOCAL_STORAGE_KEY } from "@DJobs/DjobsUtils/LocalStorageKeys";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TS_API,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Accept, Cache-Control, Pragma, Expires, Content-Type, Authorization",
    Accept: "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "text/plain",
  },
  data: {},
});

instance.interceptors.request.use(request => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  request.headers.Authorization = "Bearer " + accessToken;
  return request;
});

// Request interceptor for API calls
instance.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

    // @ts-ignore
      config.headers = {
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Access-Control-Allow-Credentials, Access-Control-Allow-Origin, Accept, Cache-Control, Pragma, Expires, Content-Type, Authorization",
      Accept: "application/json",
    };
    config.withCredentials = false;

    if (accessToken) {
      config.withCredentials = true;
      config.headers["Access-Control-Allow-Credentials"] = "true";
      config.headers["Authorization"] = "Bearer " + accessToken;
    }

    config.headers["Authorization"] = "Bearer " + accessToken;
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
instance.interceptors.response.use(
  response => {
    return response;
  },
  async function(error) {
    const originalRequest = error.config;
    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      instance.defaults.headers.common["Authorization"] =
        "Bearer " + access_token;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  instance
    .post("/clients/react/refresh", { refreshToken: refreshToken })
    .then(function(response) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.ACCESS_TOKEN,
        response.data.access_token
      );
      localStorage.setItem("refreshToken", response.data.refresh_token);

      return response.data.access_token;
    })
    .catch(() => {});
};

export default instance;
