// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import HomePage from './HomePage'; // Import the HomePage component

// Dummy components for example
// Replace these with your actual component imports
const AboutUs = () => <div>About Us Content</div>;
const Conditions = () => <div>Conditions Content</div>;
const Products = () => <div>Products Content</div>;

function App() {
  return (
    <Router>
      <nav>
        {/* Replace div with your preferred navbar component */}
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/conditions">Conditions</Link>
        <Link to="/upload">Upload Image</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;

