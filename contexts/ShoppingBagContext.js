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
  shoppingBagOpened: false,
  shoppingBagItems: [],
  subtotal: 0,
  totalQuantity: 0,
  wishlistItems: [],
  cartId: null,
});

export function ShoppingBagProvider({ children }) {
  const [shoppingBagItems, setShoppingBagItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedBagItems = localStorage.getItem('shoppingBagItems');
      return savedBagItems ? JSON.parse(savedBagItems) : [];
    }
    return [];
  });

  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [isShoppingBagOpened, setIsShoppingBagOpened] = useState(false);

  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    const storedCartId = localStorage.getItem('cart_id');
    if (storedCartId) {
      setCartId(storedCartId);
    }
  }, [cartId]);

  useEffect(() => {
    const newSubtotal = shoppingBagItems.reduce((total, item) => {
      return (
        total + (item.variants[0]?.prices[0]?.amount / 100) * item.quantity
      );
    }, 0);
    const newQuantity = shoppingBagItems.reduce((totalQuantity, item) => {
      return totalQuantity + item.quantity;
    }, 0);
    setTotalQuantity(newQuantity);
    setSubtotal(newSubtotal);
    localStorage.setItem('shoppingBagItems', JSON.stringify(shoppingBagItems));
  }, [shoppingBagItems]);

  const addItemToBag = (productToAdd) => {
    setShoppingBagItems(addToBag(shoppingBagItems, productToAdd));
    if (!isShoppingBagOpened) {
      toast.success('Item added to the Shopping Bag successfully');
    }
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
        isShoppingBagOpened,
        setIsShoppingBagOpened,
        cartId,
        setCartId,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
