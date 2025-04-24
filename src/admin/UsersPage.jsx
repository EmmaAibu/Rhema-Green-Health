import React, { useState } from "react";

const mockUsers = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    username: "mary_smith",
    email: "mary@example.com",
    role: "Admin",
    status: "Inactive",
  },
];

const UsersPage = () => {
  const [users, setUsers] = useState(mockUsers);

  const handleToggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">👥 Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-green-50">
                <td className="p-3 border">{user.id}</td>
                <td className="p-3 border">{user.username}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.role}</td>
                <td className="p-3 border">
                  <button
                    className={`${
                      user.status === "Active"
                        ? "text-green-600"
                        : "text-red-600"
                    } hover:underline`}
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    {user.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
