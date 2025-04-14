import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-green-900 shadow-md p-4 flex justify-between items-center sticky top-0 z-50 border-b border-b-gray-800">
      <h1 className="text-2xl font-bold text-primary">
        🌿Rhema Green Health Ltd
      </h1>
      <nav className="flex gap-6 text-white">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default NavBar;
