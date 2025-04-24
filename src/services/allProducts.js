import { apiClient } from "./config";

// service to fetch all products
export const getAllProducts = async () => {
  return apiClient.get("/products");
};
