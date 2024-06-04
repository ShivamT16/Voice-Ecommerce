import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { DataBase, Category } from "./Data/productsDB";
import { Product } from "./Pages/Product";
import { ProductDetail } from "./Pages/ProductDetail";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { WishList } from "./Pages/WishList";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { Addresses } from "./Pages/Addresses";
import { Checkout } from "./Pages/Checkout";
import { CategoryWise } from "./Pages/CategoryWise";
import { RequiresAuth } from "./Components/RequiresAuth";
import { Navbar } from "./Navbar";

export default function App() {
  return (
    <div className="App">
    
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home categories={Category} />} />
        <Route path="/product" element={<Product products={DataBase} categories={Category} />} />
        <Route path="/productDetail" element={<ProductDetail products={DataBase} />} />
        <Route path="/cart" element={ <RequiresAuth> <Cart /> </RequiresAuth> } />
        <Route path="/wishList" element={ <RequiresAuth> <WishList /> </RequiresAuth> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Addresses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category" element={<CategoryWise products={DataBase} />} />
      </Routes>
    </div>
  );
}
