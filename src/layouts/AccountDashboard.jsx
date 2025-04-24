import React from "react";
import { Outlet } from "react-router-dom";
import AccountSidebar from "../components/AccountSidebar";

const AccountDashboard = () => {
  return (
    <div className="flex min-h-screen bg-green-100">
      <AccountSidebar />

      <main className="flex-1 p-6">
        {/* Top bar without logout */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-green-800">Nana Afia</h1>
        </div>

        {/* Nested Route Content */}
        <Outlet />
      </main>
    </div>
  );
};

export default AccountDashboard;
