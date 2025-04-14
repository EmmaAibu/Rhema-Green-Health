import React from "react";

const Contact = () => {
  return (
    <div className="bg-green-200">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded-md h-32"
          ></textarea>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-secondary">
            Send Message
          </button>
        </form>

        {/* Store Address Info */}
        <div className="mt-6 text-gray-600">
          <p>
            <strong>Address:</strong> 123 Nature Ave, Wellness City
          </p>
          <p>
            <strong>Email:</strong> support@greenhealth.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">
                What are your store hours?
              </h4>
              <p>We are open Monday to Friday from 9 AM to 6 PM.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                How can I return a product?
              </h4>
              <p>
                You can return any product within 30 days of purchase. Please
                contact our support team for more details.
              </p>
            </div>
            <div>
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
