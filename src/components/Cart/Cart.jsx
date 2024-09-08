import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const quantity = cart.reduce((s,cartItem) => {
    s = s + cartItem.quantity;
    console.log(s);
    return s;
  },0);
console.log(quantity);
  return (
    <div className="cart">
      <h1>Your Cart({quantity})</h1>
      {cart.length === 0 ? (
        <div className="cart__empty">
          <img src="/assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
