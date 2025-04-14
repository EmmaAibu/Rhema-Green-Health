import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="mt-2 font-bold text-primary">${product.price}</p>
      <button className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
