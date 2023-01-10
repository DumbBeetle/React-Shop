import React, {useContext} from "react";
import "./item.css";
import {useCart} from "../../contex/CartContext";

const Item = (props) => {
    const cartContext = useCart();
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating: {rate, count},
    } = props.item;
    const quantity = cartContext.getProductQuantity(id);
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>${price}</h6>
                <div className="buttons">
                    {quantity === 0 ? (
                        <button onClick={() => cartContext.addItem(props.item)} className="add-to-cart">Add to
                            Cart</button>) : null
                    }
                    {quantity >= 1 ? (
                        <div>
                            <button className="button-increment" onClick={() => cartContext.incrementProduct(props.item.id)}>+</button>
                            <p>In cart: {quantity}</p>
                            <button className="button-decrement" onClick={() => cartContext.decrementProduct(props.item.id)}>-</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Item;
