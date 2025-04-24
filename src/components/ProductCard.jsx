import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl shadow hover:shadow-md transition overflow-hidden w-40 mx-auto">
      <div className="w-full h-32 bg-green-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-28 object-contain"
        />
      </div>
      <div className="p-8 bg-green-100">
        <h2 className="text-base font-medium text-gray-800">{product.name}</h2>
        <p className="text-xs text-gray-500">{product.category}</p>
        <p className="text-green-700 font-semibold text-sm mt-1">
          ${product.price}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-2 bg-green-800 text-white text-xs px-3 py-1 rounded hover:bg-secondary transition"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
