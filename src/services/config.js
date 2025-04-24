import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
});

apiClient.interceptors.request.use((config) => {
  // get access token from localstorage
  const token = localStorage.getItem("token");

  //attach the to authorization
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
