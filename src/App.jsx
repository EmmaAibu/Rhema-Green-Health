import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Shop from "./assets/pages/Shop";
import ProductDetail from "./assets/pages/ProductDetail";
import Cart from "./assets/pages/Cart";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Blog from "./assets/pages/Blog";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
