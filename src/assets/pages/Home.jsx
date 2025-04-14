import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import magnesiumC from "../images/magnesiumC.avif";
import bgImage from "../images/bgImage-1.jpg";
import teaImage from "../images/teaImage.jpg";
import niacin from "../images/niacin.avif";

const mockProducts = [
  {
    name: "Organic Multivitamin",
    category: "Supplements",
    price: 19.99,
    image: magnesiumC,
  },
  {
    name: "Herbal Tea Mix",
    category: "Wellness",
    price: 9.99,
    image: teaImage,
  },
  {
    name: "Niacin Flush",
    category: "Supplement",
    price: 9.99,
    image: niacin,
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[500px] w-full bg-cover bg-center bg-no-repeat text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white drop-shadow-lg"
        >
          Live Naturally, Live Well
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-white drop-shadow"
        >
          Explore nature’s best health products
        </motion.p>
      </section>

      {/* Featured Products */}
      <section className="p-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-primary mb-6">
          Featured Products
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {mockProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits of Natural Health */}
      <motion.section
        className="bg-green-100 p-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-primary mb-4">
          Why Choose Natural Health?
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Boosts immunity naturally</li>
          <li>✅ Free from harmful chemicals</li>
          <li>✅ Supports long-term wellness</li>
          <li>✅ Eco-friendly and sustainable</li>
        </ul>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="p-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-primary mb-6">
          What Our Customers Say
        </h3>
        <div className="space-y-6">
          <blockquote className="bg-white p-6 rounded-xl shadow text-sm text-gray-700 italic">
            "Rhema Green Health has changed my life! Their supplements are top
            quality."
            <br />— Jane O.
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow text-sm text-gray-700 italic">
            "I feel more energetic and healthy every day. Highly recommended!"
            <br />— Mark T.
          </blockquote>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-primary text-white text-center py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4">
          Ready to Transform Your Health?
        </h3>
        <p className="mb-6">
          Shop now or learn more about our natural wellness approach.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/shop"
            className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-green-100"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary"
          >
            Learn More
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
