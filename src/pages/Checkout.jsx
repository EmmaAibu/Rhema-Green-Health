import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const mockCartItems = [
  {
    name: "Flat Tummy Tea",
    price: 49.99,
    quantity: 2,
    image: "",
  },
  {
    name: "Cinnamon Sticks (Powder)",
    price: 6.99,
    quantity: 1,
    image: "",
  },
  {
    name: "Organic Honey",
    price: 19.99,
    quantity: 1,
    image: "",
  },
];

const Checkout = () => {
  const navigate = useNavigate();
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
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "✅ Order confirmed! Thank you for shopping with Rhema Green Health."
    );
    navigate("/account"); // Optionally redirect after confirmation
  };

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = 4.5;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 mt-6 mb-10 bg-green-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center text-green-900 mb-10">
        🛒 Checkout
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
        {/* Delivery Address */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-800">
              Delivery Address
            </h3>
            <div className="space-y-4">
              {["fullName", "address", "city", "phone"].map((field) => (
                <input
                  key={field}
                  type={field === "phone" ? "tel" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "fullName"
                      ? "Full Name"
                      : field === "address"
                      ? "Street Address"
                      : field === "city"
                      ? "City"
                      : "Phone Number"
                  }
                  required={field !== "phone"}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                />
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-800">
              Payment Method
            </h3>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
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
                <div className="font-medium">
                  {item.name}
                  <span className="text-gray-500"> × {item.quantity}</span>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
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
          className="w-full bg-green-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors duration-300"
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
