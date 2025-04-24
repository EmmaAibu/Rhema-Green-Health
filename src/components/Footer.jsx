import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">🌿 Rhema Green Health Ltd</h2>
          <p className="text-sm">
            Your one-stop shop for organic health supplements and wellness
            products. Live naturally, live well.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-green-300">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-green-300">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-green-300">
                Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-2">Connect With Us</h3>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="#" className="hover:text-green-300">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-300">
              <Twitter />
            </a>
            <a href="#" className="hover:text-green-300">
              <Instagram />
            </a>
            <a
              href="mailto:info@rhemagreenhealth.com"
              className="hover:text-green-300"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} Rhema Green Health Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
