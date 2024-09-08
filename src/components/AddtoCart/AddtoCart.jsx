import React, { memo, useEffect, useState } from "react";
import "./AddtoCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementCart, decrementCart } from "../../cartReducer";
const AddtoCart = memo(({ index, singleItem }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const itemInCart = cart.find((item) => item.name === singleItem.name);

  const addtoCart = () => {
    dispatch(addToCart(singleItem));
  };
  const handleIncrement = () => {
    dispatch(incrementCart(singleItem));
  };
  const handleDecrement = () => {
    dispatch(decrementCart(singleItem));
  };
  return (
    <div className="addtocart">
      {!itemInCart ? (
        <button onClick={addtoCart} className="addtocart__button white">
          <img
            src="/assets/images/icon-add-to-cart.svg"
            className="addtocart__button--cart"
          />
          <p className="cartp">Add to Cart</p>
        </button>
      ) : (
        <button className="addtocart__button saffron">
          <section className="saffron--negative" onClick={handleDecrement}>
            <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
          </section>
          <p className="saffron__number">{itemInCart.quantity}</p>
          <section className="saffron--negative" onClick={handleIncrement}>
            <img src="/assets/images/icon-increment-quantity.svg" alt="" />
          </section>
        </button>
      )}
    </div>
  );
});

export default AddtoCart;
