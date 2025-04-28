import { apiClient } from "./config";

//services to deleteProduct
export const apiDeleteProduct = async (id) => {
  return apiClient.delete(`/products/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
};
