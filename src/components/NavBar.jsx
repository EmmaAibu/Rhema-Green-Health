import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBasket, Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 0;

  return (
    <header className="bg-green-900 shadow-md p-4 sticky top-0 z-50 border-b border-b-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          🌿Rhema Green Health Ltd
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/cart" className="relative">
            <ShoppingBasket className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          </Link>

          <Link to="/login" className="hover:underline">
            My Account
          </Link>
        </nav>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingBasket className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 flex flex-col items-center text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            My Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
