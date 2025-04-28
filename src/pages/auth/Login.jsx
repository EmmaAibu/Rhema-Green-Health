import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiLogin } from "../../services/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase"; // adjust path as needed

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiLogin(formData);
      console.log(response.data);

      const user = response.data.user;
      const token = response.data.token;

      // Store user and token
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      // Navigate based on role
      if (user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/checkout");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700">Log In</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <Link
            to="/reset-password"
            className="text-sm text-green-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Log In
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
