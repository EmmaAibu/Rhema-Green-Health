import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiSignUp } from "../../services/auth";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (confirmPassword && password) {
      setPasswordMatch(password === confirmPassword);
    } else {
      setPasswordMatch(true);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiSignUp(formData);
      console.log("response", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/login"); // Optional redirect
    } catch (error) {
      console.log(error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700">Sign Up</h2>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <input
          name="username"
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Password Input with Toggle */}
        <div className="relative mb-2">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Confirm Password Input */}
        <input
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className={`w-full mb-2 p-3 border ${
            !passwordMatch ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none focus:ring-2 ${
            !passwordMatch ? "focus:ring-red-400" : "focus:ring-green-500"
          }`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {!passwordMatch && (
          <p className="text-sm text-red-500 mb-4">Passwords do not match</p>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
