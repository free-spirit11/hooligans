'use client';
import { useGetCart } from 'medusa-react';
import CartItem from './CartItem';
import { useCartContext } from '@/contexts/CartContext';
import { useEffect } from 'react';

const CartContent = ({ cartId }) => {
  const { cart, setCart } = useCartContext();
  const { cart: apiCart } = useGetCart(cartId);

  useEffect(() => {
    if (apiCart) {
      setCart(apiCart);
    }
  }, [apiCart, cart]);

  return (
    <>
      {cart?.items.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          cart={cart}
          cartId={cartId}
          key={cartItem.id}
        />
      ))}
    </>
  );
};

export default CartContent;
