import React, { useState } from "react";

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
  // Use state to track quantities
  const [updatedCart, setUpdatedCart] = useState(cartItems);

  // Update quantity in cart
  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...updatedCart];
    updatedItems[index].quantity = newQuantity;
    setUpdatedCart(updatedItems);
  };

  // Calculate the total
  const total = updatedCart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-primary">Your Cart</h2>
      {updatedCart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {updatedCart.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>

                  {/* Quantity Selector */}
                  <div className="mt-2">
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
                      className="ml-2 p-2 border rounded"
                    />
                  </div>
                </div>

                {/* Price Breakdown */}
                <p className="font-bold text-secondary">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total:</h3>
            <span className="text-xl font-bold text-primary">${total}</span>
          </div>

          {/* Checkout Button */}
          <button className="mt-4 bg-primary text-white px-6 py-2 rounded-xl hover:bg-secondary w-full">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
