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
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bulma/css/bulma.css';
import './assets/css/main.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
})
const link = from ([
  errorLink,
  new HttpLink({uri: "http://localhost:3000/graphql"})
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})
ReactDOM.render(
  <><React.StrictMode>

  </React.StrictMode><BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </BrowserRouter></>,
  document.getElementById('root')
);

reportWebVitals();
