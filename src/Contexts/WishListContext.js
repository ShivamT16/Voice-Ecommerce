import { createContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialState, wishlistReducer } from "../Reducers/WishListReducer";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  
  const [states, dispatchs] = useReducer(wishlistReducer,initialState)

  const wishListNotify = () => toast.success("Added to Favourites");

  return (
    <WishListContext.Provider value={{ wishListNotify, states, dispatchs }} >
      {children}
    </WishListContext.Provider>
  );
}
