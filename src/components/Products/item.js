import React, { useContext } from "react";
import "./item.css";
import { useCart } from "../../contex/CartContext";

const Item = (props) => {
  const cartContext = useCart();
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = props.item;
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
        <button
          onClick={() => cartContext.addItem(props.item)}
          className="add-to-cart"
        >
          Add to Cart
        </button>
        <button onClick={() => cartContext.decrementProduct(props.item.id)}>
          Remove from Cart
        </button>
        <button onClick={() => cartContext.printCart()}>Print</button>
      </div>
    </div>
  );
};

export default Item;
