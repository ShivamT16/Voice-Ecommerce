import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { CartContext, CartProvider } from "./Contexts/CartContext";
import { WishListContext, WishListProvider } from "./Contexts/WishListContext";
import { ProductContext, ProductProvider } from "./Contexts/ProductContext";
import { AddressContext, AddressProvider } from "./Contexts/AddressContext";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export { CartContext };
export { WishListContext };
export { ProductContext };
export { AddressContext };
export { AuthContext };

root.render(
  <React.StrictMode>
   <Router>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <AddressProvider>
              <AuthProvider>
                  <App />
              </AuthProvider>
            </AddressProvider>
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);