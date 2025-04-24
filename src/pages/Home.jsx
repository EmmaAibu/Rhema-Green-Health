import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/allProducts";
import bgImage from "../assets/images/bgImage-1.jpg"; // Update the path if needed

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getAllProducts();
      const limitedProducts = response.data.slice(0, 4); // Get only first 4 products
      setFeaturedProducts(limitedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/20 bg-opacity-40 z-0" />
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Live Naturally, Live Well
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-2xl text-white z-10"
        >
          Explore nature’s best health products
        </motion.p>
        <Link
          to="/shop"
          className="mt-6 z-10 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
        >
          Shop Here
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center text-green-800 mb-10">
          Featured Products
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product._id}
              whileHover={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-4 rounded-lg"
              />
              <h4 className="text-lg font-semibold text-center text-gray-800 mb-1">
                {product.name}
              </h4>
              <p className="text-green-700 font-bold mb-3 text-base">
                ${product.price.toFixed(2)}
              </p>
              <Link
                to={`/product/${product._id}`}
                className="mt-auto bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="bg-green-100 py-12 text-center px-6 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-green-900 mb-6">
          Why Choose Natural Health?
        </h3>
        <ul className="space-y-4 text-lg text-gray-700 max-w-xl mx-auto">
          <li>✅ Boosts immunity naturally</li>
          <li>✅ Free from harmful chemicals</li>
          <li>✅ Supports long-term wellness</li>
          <li>✅ Eco-friendly and sustainable</li>
        </ul>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-14 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-green-800 mb-8">
          What Our Customers Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="bg-white border-l-4 border-green-500 p-6 rounded-xl shadow text-gray-700 italic">
            "Rhema Green Health has changed my life! Their supplements are top
            quality."
            <br /> <span className="block mt-2 font-semibold">— Jane O.</span>
          </blockquote>
          <blockquote className="bg-white border-l-4 border-green-500 p-6 rounded-xl shadow text-gray-700 italic">
            "I feel more energetic and healthy every day. Highly recommended!"
            <br /> <span className="block mt-2 font-semibold">— Mark T.</span>
          </blockquote>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-green-700 text-white text-center py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Health?
        </h3>
        <p className="text-lg mb-6">
          Shop now or learn more about our natural wellness approach.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/shop"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-100 transition"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition"
          >
            Learn More
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
