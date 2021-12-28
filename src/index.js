import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import './index.css';
import './assets/css/main.scss';
import reportWebVitals from './reportWebVitals'
import Home from './pages/home';
import Layout from './pages/layout'
import Products from './pages/products'
import NoPage from './pages/NoPage'


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
