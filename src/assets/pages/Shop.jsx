import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import vitamin from "../images/vitamin-c.jpg";
import probiotic from "../images/probiotic.jpg";
import immune from "../images/immune.jpg";

const allProducts = [
  {
    name: "Organic Vitamin C",
    category: "Supplements",
    price: 14.99,
    image: vitamin,
  },
  {
    name: "Natural Probiotic",
    category: "Supplements",
    price: 24.99,
    image: probiotic,
  },
  {
    name: "Herbal Immune Booster",
    category: "Herbal",
    price: 18.5,
    image: immune,
  },
  // Add more products as needed...
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = [
    "All",
    "Supplements",
    "Herbal",
    "Skincare",
    "Organic Foods",
  ];

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, selectedCategory]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = useMemo(() => {
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search for products"
        />
        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          aria-label="Filter products by category"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            <p>No products found.</p>
            <img src="/path-to-your-image.png" alt="No products found" />
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200"
              }`}
              aria-current={currentPage === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
