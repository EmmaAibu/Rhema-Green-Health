import React, { useState, useEffect } from "react";

// Simulate cart items (replace with context/store integration)
const mockCartItems = [
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

const Checkout = () => {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "Card",
  });

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setOrderItems(mockCartItems);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order confirmed! Thank you for shopping with Rhema Green Health.");
  };

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 4.5;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-green-50 rounded-xl shadow-lg mt-6 mb-10">
      <h2 className="text-3xl font-extrabold text-center text-green-900 mb-10">
        🛒 Checkout
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
        {/* Delivery Form */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-800">
              Delivery Address
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-green-800">
              Payment Method
            </h3>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="Card">Credit/Debit Card</option>
              <option value="MobileMoney">Mobile Money</option>
              <option value="CashOnDelivery">Cash on Delivery</option>
            </select>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-green-800">
            Order Summary
          </h3>
          <div className="space-y-4">
            {orderItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-medium">
                    {item.name}{" "}
                    <span className="text-gray-600">× {item.quantity}</span>
                  </p>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <hr className="my-4" />
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-green-900 border-t pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </form>

      {/* Confirm Button */}
      <div className="mt-10">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-green-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
