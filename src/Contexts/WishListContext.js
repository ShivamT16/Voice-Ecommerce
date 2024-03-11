import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const handleWishListUpdate = (item) => {
    const findProduct = wishList.find((element) => element.id === item.id);

    if (findProduct) {
      setWishList(
        wishList.map((listProduct) => {
          if (listProduct.id === item.id) {
            return { ...listProduct, quantity: listProduct.quantity + 1 };
          } else {
            return {
              ...listProduct
            };
          }
        })
      );
    } else {
      setWishList([...wishList, { ...item, quantity: 1 }]);
    }
  };

  const handleDelete = (element) => {
    setWishList(wishList.filter(({ id }) => id !== element));
  };

  const wishListNotify = () => toast.success("Added to Favourites");

  return (
    <WishListContext.Provider
      value={{ wishList, handleWishListUpdate, handleDelete, wishListNotify }}
    >
      {children}
    </WishListContext.Provider>
  );
}
