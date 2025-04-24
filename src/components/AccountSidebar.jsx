import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, Package, Heart, LogOut, Menu } from "lucide-react";

const AccountSidebar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClass =
    "flex items-center gap-2 px-4 py-2 rounded hover:bg-green-200";
  const activeClass = "bg-green-300 text-green-900 font-semibold";

  const confirmLogout = () => {
    localStorage.removeItem("token");
    setShowModal(false);
    setSidebarOpen(false);
    navigate("/login");
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu />
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-green-100 p-6 shadow-md transform transition-transform duration-300 ease-in-out z-40
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex md:flex-col md:min-h-screen`}
      >
        <div>
          <h2 className="text-lg font-bold text-green-700 mb-6">My Account</h2>
          <nav className="space-y-2">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <User size={18} />
              Profile
            </NavLink>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Package size={18} />
              Order History
            </NavLink>
            <NavLink
              to="saved"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Heart size={18} />
              Saved Items
            </NavLink>
          </nav>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 text-red-600 hover:bg-red-100 px-4 py-2 rounded transition mt-6"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountSidebar;
