import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllProducts } from "../services/allProducts";

const Shop = () => {
  const [ads, setAds] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products from backend
  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filtered results based on search query
  const filteredProducts = useMemo(() => {
    return ads.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, ads]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Search Input */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="search" className="text-gray-700 mb-1 font-medium">
              Search Products
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg p-2 shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <motion.div
                key={product._id || idx}
                className="border border-gray-300 rounded-xl bg-white shadow-sm p-4 hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <img
                  src={
                    product.image && product.image.length > 0
                      ? `https://res.cloudinary.com/du9oqg7ji/image/upload/rhema-green-health/product_images/${product.image[0]}`
                      : "https://via.placeholder.com/300x200.png?text=No+Image"
                  }
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />

                <h2 className="text-base font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">{product.category}</p>
                <p className="text-md font-bold text-green-700 mb-3">
                  ${product.price}
                </p>
                <Link
                  to={`/product/${product.id || product._id}`}
                  className="block bg-green-700 hover:bg-green-800 text-white text-center py-2 rounded-md transition"
                >
                  View Details
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
