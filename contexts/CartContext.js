'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({
  cart: null,
  setCart: () => {},
});

export function CustomCartProvider({ children }) {
  const [cart, setCart] = useState();

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
