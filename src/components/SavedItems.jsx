import React from "react";

const SavedItems = () => {
  const saved = [
    { name: "Flat Tummy Tea", price: "$99.98" },
    { name: "Cinnamon Sticks/ (Powder)", price: "$6.99" },
    { name: "Organic Honey", price: "$19.99" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-green-700 mb-4">❤️ Saved Items</h2>
      <ul className="space-y-3">
        {saved.map((item, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span>{item.name}</span>
            <span className="text-gray-700">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedItems;
