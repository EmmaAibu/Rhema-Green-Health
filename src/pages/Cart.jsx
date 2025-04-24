import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Import useNavigate

// Mock cart items, replace with dynamic cart data from context
const cartItems = [
  {
    name: "Organic Vitamin C",
    price: 14.99,
    quantity: 2,
    image: "/images/vitamin-c.jpg",
  },
  {
    name: "Organic Vitamin D",
    price: 19.99,
    quantity: 1,
    image: "/images/vitamin-d.jpg",
  },
];

const Cart = () => {
  const [updatedCart, setUpdatedCart] = useState(cartItems);
  const navigate = useNavigate(); // 🔄 Initialize navigation

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...updatedCart];
    updatedItems[index].quantity = newQuantity;
    setUpdatedCart(updatedItems);
  };

  const total = updatedCart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-4 text-primary">Your Cart</h2>
      {updatedCart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {updatedCart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-4 border-b rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="mt-2 flex items-center gap-4">
                    <label
                      htmlFor={`quantity-${idx}`}
                      className="text-sm text-gray-600"
                    >
                      Quantity:
                    </label>
                    <input
                      id={`quantity-${idx}`}
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(idx, parseInt(e.target.value, 10))
                      }
                      className="w-16 p-2 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </div>
                <p className="font-bold text-lg text-secondary">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center text-lg font-semibold">
            <h3>Total:</h3>
            <span className="text-2xl font-bold text-primary">${total}</span>
          </div>

          {/* Checkout Button with navigation */}
          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-green-700 text-white py-3 px-6 rounded-xl w-full hover:bg-green-800 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
