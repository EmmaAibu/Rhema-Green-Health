import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full bg-green-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-900 text-center">
          Contact Us
        </h1>

        {/* Contact Form */}
        <form className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 md:col-span-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>
          <button className="md:col-span-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-xl transition-all duration-300 w-44 mx-auto">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="flex items-start gap-3">
            <MapPin className="text-green-700 mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p>123 Nature Ave, Wellness City</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-green-700 mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p>support@greenhealth.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-green-700 mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-xl mt-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="p-4 border-l-4 border-green-700 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg">
                What are your store hours?
              </h4>
              <p>We are open Monday to Friday from 9 AM to 6 PM.</p>
            </div>
            <div className="p-4 border-l-4 border-green-700 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg">
                How can I return a product?
              </h4>
              <p>
                You can return any product within 30 days of purchase. Please
                contact our support team for more details.
              </p>
            </div>
            <div className="p-4 border-l-4 border-green-700 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg">
                Do you offer free shipping?
              </h4>
              <p>
                Yes, we offer free shipping on orders over $50 within the city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
