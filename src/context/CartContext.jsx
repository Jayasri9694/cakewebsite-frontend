import React, { createContext, useContext, useState } from "react";

// Create Context
const CartContext = createContext();

// Custom Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    setCart([...cart, cake]);
  };

  const removeFromCart = (cakeId) => {
    setCart(cart.filter((cake) => cake.id !== cakeId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
