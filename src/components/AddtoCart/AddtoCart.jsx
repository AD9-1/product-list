import React, { useEffect, useState } from "react";
import "./AddtoCart.scss";
const AddtoCart = ({ index, singleItem }) => {
  const [getInCart, setGetInCart] = useState(false);
  const [count, setCount] = useState();
  useEffect(() => {
    if (count == 0) setGetInCart(false);
  }, [count]);

  const addtoCart = () => {
    setGetInCart(true);
    setCount(1);
  };
  return (
    <div className="addtocart">
      {!getInCart ? (
        <button onClick={addtoCart} className="addtocart__button white">
          <img src="/assets/images/icon-add-to-cart.svg" className="addtocart__button--cart" />
          <p>Add to Cart</p>
        </button>
      ) : (
        <button className="addtocart__button saffron">
          <section className="saffron--negative" onClick={() => setCount(count - 1)}>
            <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
          </section>
          <p className="saffron__number">{count}</p>
          <section className="saffron--negative" onClick={() => setCount(count + 1)}>
            <img src="/assets/images/icon-increment-quantity.svg" alt="" />
          </section>
        </button>
      )}
    </div>
  );
};

export default AddtoCart;
