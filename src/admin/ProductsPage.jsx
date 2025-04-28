import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { getAllProducts } from "../services/allProducts";
import { apiDeleteProduct } from "../services/deleteProduct";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleFormSubmit = (product) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p._id === editingProduct._id ? { ...p, ...product } : p
        )
      );
    } else {
      setProducts((prev) => [...prev, product]);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await apiDeleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      setShowForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("There was an error deleting the product. Please try again.");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="p-4 md:p-6 bg-green-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-green-900">
          Manage Products
        </h1>
        <button
          onClick={handleAddClick}
          className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          + Add Product
        </button>
      </div>

      {showForm && (
        <ProductForm
          existingProduct={editingProduct}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      )}

      <div className="mt-8 overflow-x-auto">
        {products.length === 0 ? (
          <p className="text-gray-700">No products yet.</p>
        ) : (
          <table className="min-w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Stock</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="text-center bg-white hover:bg-green-50 transition"
                >
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">${product.price}</td>
                  <td className="p-2 border">{product.category}</td>
                  <td className="p-2 border">{product.stock}</td>
                  <td className="p-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
