import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { CartContext, CartProvider } from "./Contexts/CartContext";
import { WishListContext, WishListProvider } from "./Contexts/WishListContext";
import { ProductContext, ProductProvider } from "./Contexts/ProductContext";
import { AddressContext, AddressProvider } from "./Contexts/AddressContext";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";
import { CategoryContext, CategoryProvider } from "./Contexts/CategoryContext";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

export { CartContext };
export { WishListContext };
export { ProductContext };
export { AddressContext };
export { AuthContext };
export { CategoryContext };

root.render(
  <React.StrictMode>
   <Router>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <AddressProvider>
              <AuthProvider>
                <CategoryProvider>
                  <App />
                </CategoryProvider>
              </AuthProvider>
            </AddressProvider>
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();