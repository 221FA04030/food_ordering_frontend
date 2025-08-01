import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Cart/Home";
import Placeorder from "./pages/Home/Cart/Placeholder/Placeorder";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/Loginpopup/Loginpopup";
import Cart from "./pages/home/Cart/Cart";

import { Toaster } from "react-hot-toast";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Global toast system */}
      <Toaster position="top-right" reverseOrder={false} />

      {showLogin && <Loginpopup setShowLogin={setShowLogin} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        

        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
