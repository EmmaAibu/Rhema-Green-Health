import React from "react";
import { motion } from "framer-motion";
import { Leaf, HeartHandshake, Recycle } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="w-full bg-green-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-14 bg-green-50 rounded-2xl shadow-sm">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-green-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About Us
        </motion.h1>

        {/* Mission & Vision */}
        <motion.section
          className="space-y-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3">
            <Leaf className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-800">
              Our Mission & Vision
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            At Green Health Supermarket, our mission is to empower individuals
            to live healthier lives through access to natural, organic, and
            sustainable products.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our vision is a world where wellness is accessible to all, where
            people and the planet thrive in harmony, and where everyday choices
            contribute to a healthier future.
          </p>
        </motion.section>

        {/* Our Story */}
        <motion.section
          className="space-y-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3">
            <HeartHandshake className="text-pink-600" size={28} />
            <h2 className="text-2xl font-semibold text-green-800">Our Story</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Green Health Supermarket began as a small family-run store dedicated
            to holistic wellness. Over the years, we've grown into a trusted
            community resource for natural health products. We are passionate
            about promoting a lifestyle that blends tradition and science to
            support well-being in every stage of life.
          </p>
        </motion.section>

        {/* Sustainability Practices */}
        <motion.section
          className="space-y-4 p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3">
            <Recycle className="text-blue-600" size={28} />
            <h2 className="text-2xl font-semibold text-green-800">
              Sustainability Practices
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Sustainability is at the heart of everything we do. From our
            packaging to our partnerships, we are committed to minimizing our
            environmental impact.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
            <li>Eco-friendly, recyclable packaging</li>
            <li>Partnerships with ethical and local suppliers</li>
            <li>Reducing carbon footprint through efficient logistics</li>
            <li>Supporting reforestation and clean water initiatives</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
