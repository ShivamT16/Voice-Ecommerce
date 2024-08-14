import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./cart.css";

import { CartContext, WishListContext } from "..";

export const Cart = () => {
  const { totalPrice, deleteNotify, state, dispatch } = useContext(CartContext);
  const { wishListNotify, states, dispatchs } = useContext(WishListContext);

  return (
    <div>
      <div className="cartHeader">
        <p> Total Item In The Cart - {state.cart.length} </p>
        <p>Total price-  ₹ {totalPrice}</p>
        <Link className="link" to="/address">
          {state.cart.length > 0 && <button className="nextBtn">Next</button>}
        </Link>
      </div>
      <div className="cart">
        {state.cart.length > 0 ? (
          state.cart.map((item) => {
            const { id, name, price, image, quantity } = item;

            return (
              <div key={id} className="cartProduct">
                <img className="cartImage" alt="product img" src={image} />
                <ul>{name}</ul>
                <ul>INR:{price}</ul>
                <div>
                  <button
                    onClick={() => 
                      // handleDecreaseQuantity(item)
                      dispatch({type: "DECREASE_QUANTITY", payload: item})
                    }
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    type="button"
                    onClick={() => 
                      // handleIncreaseQuantity(item)
                      dispatch({type: "INCREASE_QUANTITY", payload: item})
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    // handleDelete(id);
                    deleteNotify();
                    dispatch({type: "REMOVE_FROM_CART", payload: id})
                  }}
                >
                  Remove
                </button>
                {states.wishlist.find((element) => element.id === item.id) ? (
                <button
                  onClick={() => {
                    // handleDelete(id);
                    dispatchs({type:"REMOVE_FROM_WISHLIST", payload: id})
                    deleteNotify();
                  }}
                >
                  Remove from Favourite
                </button>
              ) : (
                <button
                  onClick={() => {
                    // handleWishListUpdate(item);
                    dispatchs({type:"ADD_TO_WISHLIST", payload: item})
                    wishListNotify();
                  }}
                >
                  Add to Favourite
                </button>
              )}

              </div>
            );
          })
        ) : (
          <h2>
            Cart is Empty, please
            <Link className="link" to="/product">
              "Explore"
            </Link>{" "}
          </h2>
        )}
      </div>
      <Link className="link" to="/address">
        {state.cart.length > 2 && <button className="nextBtn">Next</button>}
      </Link>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
