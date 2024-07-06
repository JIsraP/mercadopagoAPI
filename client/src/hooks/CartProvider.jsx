import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevCount => prevCount + 1);
    setItems(prevItems => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);