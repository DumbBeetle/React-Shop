import React from "react";
import "./CartProduct.css";

const CartProduct = (props) => {
  const { id, title, image, quantity, price } = props.productData;
  return (
    <section className="cart-product">
      <img src={image} alt="" />
      <p>{title}</p>
      <div>
        <button className="button-increment" onClick={() => props.addButton(id)}>+</button>
        <p>{quantity}</p>
        <button className="button-decrement" onClick={() => props.subtractButton(id)}>-</button>
      </div>
      <p>
        {/* toFixed Prevent number like 200.70000000000002  from happening (9 * 22.3)*/}
        ${(price * quantity).toFixed(2)}
      </p>
    </section>
  );
};

export default CartProduct;
