import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const quantity = cart.reduce((s, cartItem) => {
    s = s + cartItem.quantity;
    console.log(s);
    return s;
  }, 0);
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
        <div className="cart__exist">
          <article>
            <section className="cart__exist__list">
              {" "}
              <div>
                <h3>Classic Tiramisu</h3>
                <p>
                  <span className="number-saffron"> 1x</span>&nbsp;&nbsp;&nbsp;
                  <span className="each-price">@$5.50</span>
                  &nbsp;&nbsp;
                  <span className="total-price">$5.50</span>
                </p>
              </div>
              <div className="cart__exist__list--remove">
                <img src="/assets/images/icon-remove-item.svg" alt="" />
              </div>
            </section>
            <hr />
          </article>
        </div>
      )}
    </div>
  );
};

export default Cart;
