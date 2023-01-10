import React from "react";
import "./ShoppingCart.css";
import { useCart } from "../../contex/CartContext";
import CartProduct from "./CartProduct";

const ShoppingCart = () => {
  const cartContext = useCart();
  const count = cartContext.getTotalCount();
  const cartProducts = cartContext.cartItems.map((item) => {
    return (
      <CartProduct
        key={item.id}
        productData={item}
        subtractButton={cartContext.decrementProduct}
        addButton={cartContext.incrementProduct}
      />
    );
  });

  return (
    <div className="cart-container">
      <div className="cart-icon">
        <div className="shopping-cart">
          <div className="cart-quantity">{count}</div>
        </div>
      </div>
      <div className="cart-product-window">
        {cartProducts}
        <p>Total: ${cartContext.getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
