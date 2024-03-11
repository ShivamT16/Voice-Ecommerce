import "./styles.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";

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

import { ProductContext, AuthContext } from "./index";

export default function App() {
  const [search, setSearch] = useState("");
  const { handleProduct } = useContext(ProductContext);
  const { isLoggedIn, handleLogin } = useContext(AuthContext);

  return (
    <div className="App">
      <nav>
        <NavLink className="nav1" to="/">
          VOiCE
        </NavLink>
        <div>
          <input
            className="nav2"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="nav3">
          <NavLink className="navLink" to="/product">
            Explore
          </NavLink>
          <NavLink className="navLink" to="/wishList">
            WishList
          </NavLink>
          <NavLink className="navLink" to="/cart">
            Cart
          </NavLink>
          {isLoggedIn ? (
            <NavLink className="navLink" onClick={handleLogin}>
              Logout
            </NavLink>
          ) : (
            <NavLink className="navLink" to="login">
              Login
            </NavLink>
          )}
        </div>
      </nav>

      {search &&
        DataBase.filter(
          ({ name, category }) =>
            name
              .toUpperCase()
              .toLowerCase()
              .includes(search.toUpperCase().toLowerCase()) ||
            category
              .toUpperCase()
              .toLowerCase()
              .includes(search.toUpperCase().toLowerCase())
        ).map((item) => {
          const { id, name, category, image } = item;
          return (
            <div
              key={id}
              onClick={() => {
                handleProduct(id);
                setSearch("");
              }}
            >
              <Link className="link" to="/productDetail">
                <img
                  style={{ height: "2rem", width: "2rem", border: "none" }}
                  alt="hh"
                  src={image}
                />
                {name} || ({category})
              </Link>
            </div>
          );
        })}
      <Routes>
        <Route path="/" element={<Home categories={Category} />} />
        <Route
          path="/product"
          element={<Product products={DataBase} categories={Category} />}
        />
        <Route
          path="/productDetail"
          element={<ProductDetail products={DataBase} />}
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishList"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Addresses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/category"
          element={<CategoryWise products={DataBase} />}
        />
      </Routes>
    </div>
  );
}
