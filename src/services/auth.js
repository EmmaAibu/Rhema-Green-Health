import { apiClient } from "./config";

// services for sign Up
export const apiSignUp = async (payload) => {
  return apiClient.post("/users/register", payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const apiLogin = async (payload) => {
  return apiClient.post("/users/login", payload, {
    headers: { "Content-Type": "application/json" },
  });
};
