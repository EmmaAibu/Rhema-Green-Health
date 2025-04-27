import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ResetPassword from "./pages/auth/ResetPassword";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AccountDashboard from "./layouts/AccountDashboard";
import ProfileSection from "./components/ProfileSection";
import OrderHistory from "./components/OrderHistory";
import SavedItems from "./components/SavedItems";

import ProductsPage from "./admin/ProductsPage";
import OrdersPage from "./admin/OrdersPage";
import UsersPage from "./admin/UsersPage";
import AdminLayout from "./admin/AdminLayout";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Nested Account Routes */}
            <Route path="/account" element={<AccountDashboard />}>
              <Route path="profile" element={<ProfileSection />} />
              <Route path="orders" element={<OrderHistory />} />
              <Route path="saved" element={<SavedItems />} />
            </Route>

            {/* Admin Routes inside AdminLayout */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="products" element={<ProductsPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
