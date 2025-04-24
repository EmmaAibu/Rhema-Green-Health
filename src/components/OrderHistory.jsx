import React from "react";

const OrderHistory = () => {
  const orders = [
    { id: "ORD001", date: "2024-12-01", total: "$39.98", status: "Delivered" },
    { id: "ORD002", date: "2025-01-15", total: "$19.99", status: "Shipped" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-green-700 mb-4">
        📦 Order History
      </h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order.id} className="border-b pb-2">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
            <p>
              <strong>Total:</strong> {order.total}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="text-green-600">{order.status}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
