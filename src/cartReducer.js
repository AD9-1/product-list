import { legacy_createStore as createStore } from "redux";
///Actions
export const addToCart = (item) => ({
  type: "addtocart",
  payload: item,
});
export const incrementCart = (item) => ({
  type: "increment",
  payload: item,
});
export const decrementCart = (item) => ({
  type: "decrement",
  payload: item,
});
export const removeFromCart = (index) => ({
  type: "removefromcart",
  payload: index,
});

const initialState = { cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addtocart":
      return {
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "removefromcart":
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
      };

    case "increment":
      return {
        ...state,
        cart: state.cart.map((item, index) => {
          if (action.payload.name === item.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case "decrement":
      return {
        ...state,
        cart: state.cart
          .map((item, index) => {
            if (action.payload.name === item.name && item.quantity >= 1)
              return { ...item, quantity: item.quantity - 1 };

            return item;
          })
          .filter(
            (item) => !(action.payload.name === item.name && item.quantity == 0)
          ),
      };
    default:
      return state;
  }
};
const store = createStore(cartReducer);

export default store;
