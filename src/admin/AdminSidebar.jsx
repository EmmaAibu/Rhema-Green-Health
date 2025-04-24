import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); // Get the current route location

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Check if a link is active
  const isActive = (path) => (location.pathname === path ? "bg-green-700" : "");

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-green-800 text-white rounded"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-green-800 text-white w-64 p-5 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col space-y-4 text-lg">
          <Link
            to="/admin/products"
            className={`hover:underline flex items-center gap-2 p-2 rounded-md ${isActive(
              "/admin/products"
            )}`}
          >
            🛍 <span>Products</span>
          </Link>
          <Link
            to="/admin/orders"
            className={`hover:underline flex items-center gap-2 p-2 rounded-md ${isActive(
              "/admin/orders"
            )}`}
          >
            📦 <span>Orders</span>
          </Link>
          <Link
            to="/admin/users"
            className={`hover:underline flex items-center gap-2 p-2 rounded-md ${isActive(
              "/admin/users"
            )}`}
          >
            👥 <span>Users</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
