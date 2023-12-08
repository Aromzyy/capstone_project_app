// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ImageUpload from './ImageUpload';
import ConditionsPage from './ConditionsPage'; 
import AboutUs from './AboutUs';
import Products from './Products';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/conditions" element={<ConditionsPage />} /> 
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
