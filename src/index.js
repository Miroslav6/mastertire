import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals'
import Home from './pages/home';
import Layout from './pages/layout'
import Products from './pages/products'
import NoPage from './pages/NoPage'
import 'bulma/css/bulma.css';

ReactDOM.render(
  <><React.StrictMode>
    
  </React.StrictMode><BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter></>,
  document.getElementById('root')
);

reportWebVitals();
