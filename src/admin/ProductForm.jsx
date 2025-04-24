import React, { useState, useEffect } from "react";
import { apiAddProduct } from "../services/createProducts";

const ProductForm = ({ existingProduct, onSubmit, onCancel, onDelete }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    images: [], // local image files
  });

  // Populate form if editing an existing product
  useEffect(() => {
    if (existingProduct) {
      setProduct({
        name: existingProduct.name || "",
        price: existingProduct.price || "",
        category: existingProduct.category || "",
        stock: existingProduct.stock || "",
        description: existingProduct.description || "",
        images: [], // images will be freshly uploaded
      });
    }
  }, [existingProduct]);

  // Handle text input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file input
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prev) => ({
      ...prev,
      images: files,
    }));
  };

  // Submit form with FormData (supports images)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!product.name || !product.price || !product.category) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("stock", product.stock);
    formData.append("description", product.description);

    // Append multiple images if available
    product.images.forEach((img, index) => {
      formData.append("images", img); // backend must support array-style upload
    });

    try {
      const response = await apiAddProduct(formData); // Call service
      console.log("Uploaded:", response.data);
      onSubmit(response.data.product); // Return new product object to parent
      // Reset form
      setProduct({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: "",
        images: [],
      });
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  // Delete handler
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      onDelete(existingProduct.id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-green-50 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        {existingProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        {/* NAME */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            Product Name *
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            Price ($) *
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            Category *
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-green-300 bg-white text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">-- Select Category --</option>
            <option value="Skincare">Skincare</option>
            <option value="Tea & Beverages">Tea & Beverages</option>
            <option value="Spices & Herbs">Spices & Herbs</option>
            <option value="Natural Remedies">Natural Remedies</option>
          </select>
        </div>

        {/* STOCK */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            min="0"
            className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block mb-2 text-green-900 font-semibold">
            Upload Product Images
          </label>
          <input
            name="images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 bg-white border border-green-300 rounded-lg text-sm"
          />
          {product.images.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="h-24 w-24 object-cover rounded-lg shadow border"
                />
              ))}
            </div>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-between items-center gap-2 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
          >
            Cancel
          </button>

          {existingProduct && (
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Delete
            </button>
          )}

          <button
            type="submit"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg ml-auto"
          >
            {existingProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
