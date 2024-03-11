import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CartContext, WishListContext } from "..";

export const WishList = () => {
  const { handleCartUpdate, cartNotify, deleteNotify, cart } = useContext(
    CartContext
  );
  const { wishList, handleDelete } = useContext(WishListContext);

  return (
    <div>
      <h2> Here is Your WishList </h2>
      <div className="product">
        {wishList.length > 0 ? (
          wishList.map((item) => {
            const { id, name, price, image } = item;

            return (
              <div key={id} className="product1">
                <img alt="product img" src={image} />
                <ul>{name}</ul>
                <ul>INR:{price}</ul>
                {cart.find((element) => element.id === item.id) ? (
                  <NavLink to="/cart">
                    <button> Go to Cart</button>
                  </NavLink>
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
                    handleDelete(id);
                    deleteNotify();
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })
        ) : (
          <h2> Ooops !! Wishlist is empty</h2>
        )}
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
