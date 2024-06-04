import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./checkout.css";

import { AddressContext, CartContext } from "..";

export const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const { address, addresses } = useContext(AddressContext);
  const notify = () => toast.success("Order Placed");

  return (
    <div>
      <h2> Order Summary </h2>
      <div className="check">
        {cart.map((item) => {
          const { id, name, price, image, quantity } = item;
          return (
            <div key={id} className="checkout">
              <img className="image" alt="product img" src={image} />
              <div className="checkoutProduct">
                <ul>{name}</ul>
                <ul style={{ textAlign: "left" }}>
                  Price:  ₹ {price} X {quantity}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <p className="totalPrice">
        <strong>Total price:  ₹ {totalPrice} </strong>
      </p>
      <div className="check1">
        <h3> Selected Address </h3>
        {addresses
          .filter(({ id }) => id === address)
          .map(({ id, firstName, lastName, locality, state, pincode }) => {
            return (
              <div className="checkoutAdd" key={id}>
                <p>
                  {firstName} {lastName},
                </p>
                <p>
                  {locality}, {state}, {pincode}
                </p>
              </div>
            );
          })}
      </div>
      <button className="checkBtn" onClick={notify}>
        {" "}
        Place Order{" "}
      </button>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
