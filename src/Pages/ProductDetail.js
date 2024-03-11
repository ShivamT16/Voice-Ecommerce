import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./productDetail.css";

import { CartContext, WishListContext, ProductContext } from "..";

export const ProductDetail = ({ products }) => {
  const { handleCartUpdate, cartNotify, cart } = useContext(CartContext);
  const { handleWishListUpdate, wishListNotify } = useContext(WishListContext);
  const { product } = useContext(ProductContext);

  return (
    <div>
      {products
        .filter(({ id }) => id === product)
        .map((item) => {
          const { id, name, price, description, image } = item;
          return (
            <div className="detaill">
              <div key={id} className="detail">
                <div className="">
                  <img alt="product img" src={image} />
                  <ul className="pname">{name}</ul>
                  <p>INR: {price}</p>
                </div>
                <div className="detail2">
                  <p> {description} </p>

                  {cart.find((element) => element.id === item.id) ? (
                    <Link to="/cart">
                      <button> Go to Cart</button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        handleCartUpdate(item);
                        cartNotify();
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                  <button
                    onClick={() => {
                      handleWishListUpdate(item);
                      wishListNotify();
                    }}
                  >
                    Add to Favourite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <ToastContainer autoClose={2000} />
    </div>
  );
};
