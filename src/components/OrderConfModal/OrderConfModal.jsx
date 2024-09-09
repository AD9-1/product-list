import React from "react";
import "./OrderConfModal.scss";
const OrderConfModal = ({ cart }) => {
  console.log(cart);
  return (
    <div className="modal">
      <div className="modal__tick">
        <img src="/assets/images/icon-order-confirmed.svg" alt="" />
      </div>
      <div className="modal__statement">
        <h1 className="order--confirm">Order Confirmed</h1>
        <p className="enjoy--food">We hope you enjoy your food</p>
      </div>
      <div className="modal__list">
        <article className="modal__list__article">
          <section className="modal__list__article--section">
            <div className="thumbnail-image">
              <img src="/assets/images/image-macaron-thumbnail.jpg" alt="" />
            </div>
            <div className="food-des">
              <p className="food">Classic Tiramisu</p>
              <p className="quantity-price">
                <span className="quantity-price--number">1x</span>
                &nbsp;&nbsp;&nbsp;
                <span className="quantity-price--eachprice">@$5.50</span>
              </p>
            </div>
            <div>
              <p className="tot-price">$5.50</p>
            </div>
          </section>
          <hr />
        </article>
        <div className="modal__list__totalorder">
          <p className="statement--order">Order Total</p>
          <p className="total--price">$46.50</p>
        </div>
      </div>

      <button className="modal__start">Start New Order</button>
    </div>
  );
};

export default OrderConfModal;
