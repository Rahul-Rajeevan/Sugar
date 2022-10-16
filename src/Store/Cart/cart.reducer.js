const initialState={
  cart:[],
  fav:[]
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let g=[...state.cart,action.payload]
      return {...state,cart:g}
      
    }
    case "ADD_TO_FAV": {
      let g=[...state.fav,action.payload]
      return {...state,fav:g}
      
    }
    case "REMOVE": {
      let remove_cart = state.cart.filter((item) => item.id !== action.payload.id);
      return remove_cart;
    }
    case "INCREASE": {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempCart;
    }
    case "DECREASE": {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempCart;
    }
    default:
      return state;
  }
};
