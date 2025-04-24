import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 md:hidden`} // Overlay for mobile view
        onClick={toggleSidebar}
      />
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-gray-50 p-6 ml-0 md:ml-64">
        <button
          className="md:hidden p-2 text-white bg-gray-700 rounded-md"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
