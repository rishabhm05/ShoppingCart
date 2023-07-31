export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, Products: action.payload };
    case "MensClothing":
      return { ...state, filtered: action.payload };
    case "WomensClothing":
      return { ...state, filtered: action.payload };
    case "Electronics":
      return { ...state, filtered: action.payload };
    case "jewelery":
      return { ...state, filtered: action.payload };
    case "":
      return { ...state, filtered: action.payload };
    case "high":
      return {...state,pricehightolow:action.payload};
    case "low":
      return{...state,pricehightolow:action.payload}
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove_From_CART":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
