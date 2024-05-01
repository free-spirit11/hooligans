'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  addToBag,
  removeFromBag,
  deleteFromBag,
} from '@/utils/shoppingBagOperations';

const addToWishlist = (wishlistItems, productToAdd) => {
  const isInWishlist = wishlistItems.find(
    (wishlistItem) => productToAdd._id === wishlistItem._id
  );

  if (isInWishlist) {
    return wishlistItems;
  }

  return [...wishlistItems, productToAdd];
};

const ShoppingBagContext = createContext({
  shoppingBagItems: [],
  subtotal: 0,
  totalQuantity: 0,
  wishlistItems: [],
});

export function ShoppingBagProvider({ children }) {
  const [shoppingBagItems, setShoppingBagItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const newSubtotal = shoppingBagItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    const newQuantity = shoppingBagItems.reduce((totalQuantity, item) => {
      return totalQuantity + item.quantity;
    }, 0);
    setTotalQuantity(newQuantity);
    setSubtotal(newSubtotal);
  }, [shoppingBagItems]);

  const addItemToBag = (productToAdd) => {
    setShoppingBagItems(addToBag(shoppingBagItems, productToAdd));
  };
  const removeItemFromBag = (productToRemove) => {
    setShoppingBagItems(removeFromBag(shoppingBagItems, productToRemove));
  };
  const deleteItem = (productToDelete) => {
    setShoppingBagItems(deleteFromBag(shoppingBagItems, productToDelete));
  };

  const addWishlistItem = (productToAdd) => {
    setWishlistItems(addToWishlist(wishlistItems, productToAdd));
  };

  return (
    <ShoppingBagContext.Provider
      value={{
        shoppingBagItems,
        setShoppingBagItems,
        addItemToBag,
        removeItemFromBag,
        deleteItem,
        subtotal,
        totalQuantity,
        wishlistItems,
        addWishlistItem,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
