import { apiClient } from "./config";

//service to create products
export const apiAddProduct = async (payload) => {
  return apiClient.post("/products", payload);
};
