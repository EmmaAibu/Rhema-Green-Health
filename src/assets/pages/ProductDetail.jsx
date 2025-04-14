import React from "react";
import { useParams } from "react-router-dom";

// Mock Product with full data
const mockProduct = {
  name: "Organic Vitamin C",
  description:
    "Boost your immunity naturally with our organic Vitamin C tablets, made with acerola cherry and rosehip.",
  ingredients: ["Acerola Cherry", "Rosehip", "Citrus Bioflavonoids"],
  nutritionalInfo: {
    servingSize: "1 tablet",
    calories: 5,
    vitaminC: "500mg (833% DV)",
  },
  reviews: [
    {
      user: "Jane D.",
      comment: "Great product, I feel more energized!",
      rating: 5,
    },
    {
      user: "Mark L.",
      comment: "Tastes natural and works well.",
      rating: 4,
    },
  ],
  price: 14.99,
  images: [
    "/images/vitamin-c.jpg",
    "/images/vitamin-c-alt1.jpg",
    "/images/vitamin-c-alt2.jpg",
  ],
};

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Images Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 space-y-4">
          {mockProduct.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${mockProduct.name} ${idx + 1}`}
              className="w-full rounded-xl shadow-md"
            />
          ))}
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary">
            {mockProduct.name}
          </h1>
          <p className="mt-3 text-gray-700">{mockProduct.description}</p>

          {/* Ingredients */}
          <div className="mt-4">
            <h2 className="font-semibold">Ingredients:</h2>
            <p>{mockProduct.ingredients.join(", ")}</p>
          </div>

          {/* Nutritional Info */}
          <div className="mt-4">
            <h2 className="font-semibold">Nutritional Info:</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Serving Size: {mockProduct.nutritionalInfo.servingSize}</li>
              <li>Calories: {mockProduct.nutritionalInfo.calories}</li>
              <li>Vitamin C: {mockProduct.nutritionalInfo.vitaminC}</li>
            </ul>
          </div>

          {/* Price and Add to Cart */}
          <p className="mt-4 text-2xl font-bold text-secondary">
            ${mockProduct.price}
          </p>
          <button className="mt-4 bg-primary text-white px-6 py-2 rounded-xl hover:bg-secondary">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-primary mb-4">Reviews</h2>
        {mockProduct.reviews.map((review, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 py-3 text-gray-800"
          >
            <p className="font-semibold">{review.user}</p>
            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
