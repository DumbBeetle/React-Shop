import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function decrementProduct(id) {
    setCartItems((currentCart) => {
      // If item's quantity is 1 remove
      if (currentCart.find((product) => product.id === id)?.quantity === 1) {
        return currentCart.filter((product) => product.id !== id);
      }
      // If item's quantity is above 1 lower it by 1
      return currentCart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    });
  }

  function incrementProduct(id) {
    setCartItems(() => {
      return cartItems.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  }

  function addItem(item) {
    setCartItems((currentCart) => {
      // If item isn't in the cart add it with quantity 1
      if (currentCart.find((product) => product.id === item.id) == null) {
        return [...currentCart, { ...item, quantity: 1 }];
      } else {
        return cartItems.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      }
    });
  }

  function getTotalCount() {
    return cartItems.reduce(
      (quantity, product) => product.quantity + quantity,
      0
    );
  }

  function getTotalPrice() {
    return cartItems
      .reduce((price, product) => product.price * product.quantity + price, 0)
      .toFixed(2);
  }

  function printCart() {
    console.log(cartItems);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        incrementProduct,
        decrementProduct,
        getTotalCount,
        getTotalPrice,
        printCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
