import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { CartContext, WishListContext, ProductContext } from "..";

export const CategoryWise = ({ products }) => {
  const { cartNotify, state, dispatch } = useContext(CartContext);
  const { handleWishListUpdate, wishListNotify } = useContext(WishListContext);
  const { handleProduct, productCategory } = useContext(ProductContext);

  return (
    <div className="product">
      {products
        .filter(({ category }) => category === productCategory)
        .map((item) => {
          const { id, name, price, image } = item;
          return (
            <div
              key={id}
              className="product1"
              onClick={() => handleProduct(id)}
            >
              <Link className="link" to="/productDetail">
                <img alt="product img" src={image} />
                <ul>{name} </ul>
                <p> INR: {price}</p>
              </Link>
              {state.cart.find((element) => element.id === item.id) ? (
                <NavLink to="/cart">
                  <button> Go to Cart</button>
                </NavLink>
              ) : (
                <button
                  onClick={() => {
                    cartNotify();
                    dispatch({type:"ADD_TO_CART", payload: item})
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
          );
        })}
        <ToastContainer autoClose={1500} />
    </div>
  );
};
