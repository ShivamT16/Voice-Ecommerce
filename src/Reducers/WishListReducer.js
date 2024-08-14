export const initialState = {
    wishlist: [],
}

export const wishlistReducer = (state, action) => {
    switch (action.type) {

    case "ADD_TO_WISHLIST": {
    const findProduct = state.wishlist.find((element) => element.id === action.payload.id);
     
    if (findProduct) {
        state.wishlist.map((wishlistItem) => {
          if (wishlistItem.id === action.payload.id) {
            return { ...state, wishlist: [...wishlistItem, {quantity: wishlistItem.quantity + 1}]};
          } 
          else {
            return {...state, wishlist: [...wishlistItem] } ;
          }
        })} 
      else {
      return {...state, wishlist: [...state.wishlist, { ...action.payload, quantity: 1 }] } ;
    } };

    case "REMOVE_FROM_WISHLIST":  
     return {...state, wishlist: state.wishlist.filter(({ id }) => id !== action.payload) }; 

       default: 
        return state;
    };
  }