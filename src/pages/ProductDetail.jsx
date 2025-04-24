import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllProducts } from "../services/allProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null); // use null instead of "" to avoid rendering issues
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch product details based on the URL id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getAllProducts();
        const foundProduct = response.data.find(
          (item) => item._id === id || item.id === id
        );

        if (foundProduct) {
          setProduct(foundProduct);

          // Set main image from Cloudinary if available
          if (foundProduct.images?.length > 0) {
            setMainImage(
              `https://res.cloudinary.com/du9oqg7ji/image/upload/rhema-green-health/product_images/${foundProduct.images[0]}`
            );
          } else {
            // Optionally: set a placeholder image or keep it null
            setMainImage(null);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle quantity input changes
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl text-red-500">Product not found.</h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="w-full aspect-[4/3] bg-white border rounded-xl overflow-hidden mb-4">
            {mainImage ? (
              <img
                src={mainImage}
                alt="Main product"
                className="object-contain w-full h-full p-4"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
          </div>

          {/* Thumbnail Image List */}
          <div className="flex gap-2 flex-wrap">
            {product.images?.map((img, idx) => {
              const imageUrl = `https://res.cloudinary.com/du9oqg7ji/image/upload/rhema-green-health/product_images/${img}`;
              return (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`Thumbnail ${idx}`}
                  className={`w-20 h-20 object-cover border rounded-xl cursor-pointer ${
                    mainImage === imageUrl ? "ring-2 ring-green-700" : ""
                  }`}
                  onClick={() => setMainImage(imageUrl)}
                />
              );
            })}
          </div>
        </div>

        {/* Product Details Section */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>

          {product.ingredients && (
            <div>
              <h2 className="font-semibold text-lg">Ingredients:</h2>
              <p className="text-gray-600">{product.ingredients.join(", ")}</p>
            </div>
          )}

          {product.nutritionalInfo && (
            <div>
              <h2 className="font-semibold text-lg">Nutritional Info:</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Serving Size: {product.nutritionalInfo.servingSize}</li>
                <li>Calories: {product.nutritionalInfo.calories}</li>
                <li>Vitamin C: {product.nutritionalInfo.vitaminC}</li>
              </ul>
            </div>
          )}

          <div className="text-2xl font-bold text-secondary">
            ${product.price}
          </div>

          <div className="flex items-center gap-4 mt-2">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-20 border rounded-lg p-2"
            />
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-xl transition"
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Product Reviews Section */}
      {product.reviews?.length > 0 && (
        <motion.div
          className="mt-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Reviews</h2>
          {product.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow mb-3 text-gray-800"
            >
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500 text-sm">
                {"⭐".repeat(review.rating)}
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProductDetail;
