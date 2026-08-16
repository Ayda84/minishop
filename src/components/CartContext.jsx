import { createContext, useState } from "react";

export let CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const cartCount = cartItems.length;

  function addToCart(product) {
    setCartItems((prev) => {
      const alreadyAdded = prev.some((item) => item.id === product.id);
      if (alreadyAdded) {
        return prev;
      }
      const newItems = [...prev, product];
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return newItems;
    });
  }

  function removeFromCart(id) {
    setCartItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return newItems;
    });
  }

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}