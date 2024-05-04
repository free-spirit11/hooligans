'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  addToBag,
  removeFromBag,
  deleteFromBag,
} from '@/utils/shoppingBagOperations';
import { toast } from 'react-toastify';

const addToWishlist = (wishlistItems, productToAdd) => {
  const isInWishlist = wishlistItems.find(
    (wishlistItem) => productToAdd._id === wishlistItem._id
  );

  if (isInWishlist) {
    toast.info('Item is already in the wishlist');
    return wishlistItems;
  }

  return [...wishlistItems, productToAdd];
};

const removeFromWishlist = (wishlistItems, productToRemove) => {
  const isInWishlist = wishlistItems.find(
    (wishlistItem) => productToRemove._id === wishlistItem._id
  );

  if (!isInWishlist) {
    throw new Error('Item is not in the wishlist'); // TODO: change it to toast later
  }

  return wishlistItems.filter(
    (wishlistItem) => productToRemove._id !== wishlistItem._id
  );
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
    toast.success('Item added to the Shopping Bag successfully');
  };
  const removeItemFromBag = (productToRemove) => {
    setShoppingBagItems(removeFromBag(shoppingBagItems, productToRemove));
  };
  const deleteItem = (productToDelete) => {
    setShoppingBagItems(deleteFromBag(shoppingBagItems, productToDelete));
  };

  const addWishlistItem = (productToAdd) => {
    setWishlistItems(addToWishlist(wishlistItems, productToAdd));
    toast.success('Item added to the Wishlist successfully');
  };

  const removeWishlistItem = (productToRemove) => {
    setWishlistItems(removeFromWishlist(wishlistItems, productToRemove));
    toast.success('Item removed from the Wishlist successfully');
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
        removeWishlistItem,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
