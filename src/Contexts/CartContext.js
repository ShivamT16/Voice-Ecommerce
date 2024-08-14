import { createContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartReducer, initialState } from "../Reducers/CartReducers";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, initialState)
  // console.log(state.cart)
  
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    const findProduct = cart.find((element) => element.id === item.id);
    if (findProduct) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return {
              ...cartItem
            };
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleDelete = (element) => {
    setCart(cart.filter(({ id }) => id !== element));
  };

  const handleIncreaseQuantity = (item) => {
    setCart(
      [...cart].map((element) =>
        element.id === item.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
      )
    );
  };

  const handleDecreaseQuantity = (item) => {
    setCart(
      [...cart].map((element) =>
        element.id === item.id
          ? { ...element, quantity: element.quantity - 1 }
          : element
      )
    );
  };

  const totalPrice = state.cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

  const cartNotify = () => toast.success("Added to Cart");
  const deleteNotify = () => toast.success("Item removed");

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartUpdate,
        handleDelete,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        totalPrice,
        cartNotify,
        deleteNotify,
        state, dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
