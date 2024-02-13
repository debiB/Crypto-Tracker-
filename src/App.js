import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/Hero";
import Featured from "./components/Featured.js";
import Signup from "./components/signup.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailedCoins from "./components/detailedCoins.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Featured />} />
          <Route path="/detailed-coins" element={<DetailedCoins />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
