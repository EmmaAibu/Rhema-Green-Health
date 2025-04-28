import React from "react";

const mockOrders = [
  {
    id: 1,
    customer: "Nana Afia",
    items: 3,
    total: 126.96,
    status: "Pending",
    date: "2025-04-28",
  },
  {
    id: 2,
    customer: "Mary",
    items: 5,
    total: 62.5,
    status: "Shipped",
    date: "2025-04-17",
  },
];

const OrdersPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📦 Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3 border">Order ID</th>
              <th className="p-3 border">Customer</th>
              <th className="p-3 border">Items</th>
              <th className="p-3 border">Total</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-green-50">
                <td className="p-3 border">{order.id}</td>
                <td className="p-3 border">{order.customer}</td>
                <td className="p-3 border">{order.items}</td>
                <td className="p-3 border">${order.total.toFixed(2)}</td>
                <td className="p-3 border">{order.status}</td>
                <td className="p-3 border">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
