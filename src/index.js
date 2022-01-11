import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals'
import Home from './pages/home';
import Layout from './pages/layout'
import Products from './pages/products'
import UsedProducts from './pages/UsedProducts'
import UsedProductsPage from './pages/UsedProductPage'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/contacts'
import ProductPage from './pages/ProductPage';
import NoPage from './pages/NoPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import './assets/css/main.scss';


ReactDOM.render(
  <><React.StrictMode>
    
  </React.StrictMode><BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/used-tires" element={<UsedProducts />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/used-tires/:productId" element={<UsedProductsPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter></>,
  document.getElementById('root')
);

reportWebVitals();
