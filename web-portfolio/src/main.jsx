import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<p className="font-mono text-amber-500">404 - Route not found</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
