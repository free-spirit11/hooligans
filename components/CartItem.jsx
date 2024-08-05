'use client';
import Image from 'next/image';
import { useDeleteLineItem, useUpdateLineItem } from 'medusa-react';
import { useCartContext } from '@/contexts/CartContext';
import { useEffect } from 'react';

const CartItem = ({ cartItem, cartId }) => {
  const removeItem = useDeleteLineItem(cartId);
  const updateItem = useUpdateLineItem(cartId);
  const { setCart } = useCartContext();

  const handleAddItem = (itemId) => {
    const addedQuantity = cartItem.quantity + 1;
    updateItem.mutate(
      {
        lineId: itemId,
        quantity: addedQuantity,
      },
      {
        onSuccess: ({ cart }) => {
          setCart(cart);
        },
        onError: (error) => {
          console.log('Error deleting item', error);
        },
      }
    );
  };

  const handleMinusItem = (itemId) => {
    const reducedQuantity = cartItem.quantity - 1;

    updateItem.mutate(
      {
        lineId: itemId,
        quantity: reducedQuantity,
      },
      {
        onSuccess: ({ cart }) => {
          setCart(cart);
        },
        onError: (error) => {
          console.log('Error deleting item', error);
        },
      }
    );
  };

  const handleRemoveItem = (lineItemId) => {
    removeItem.mutate(
      {
        lineId: lineItemId,
      },
      {
        onSuccess: ({ cart }) => {
          setCart(cart);
        },
        onError: (error) => {
          console.log('Error deleting item', error);
        },
      }
    );
  };

  return (
    <div className='inline-flex w-[90%] py-4 m-2 mx-5 border-b border-gray-300'>
      <div name='item image' className='w-32 h-32 bg-custom-gray-2'>
        <Image
          src={cartItem.thumbnail}
          alt='Cart item image'
          width={300}
          height={300}
        />
      </div>
      <div
        className='flex flex-col justify-between flex-1 pl-2 '
        name='item info'
      >
        <div>
          <div>
            <h3 className='text-sm '>{cartItem.title}</h3>
          </div>
          <div className='inline-flex justify-between w-full text-sm'>
            <h3>{cartItem.variant.title}</h3>
            <span className='text-sm font-semibold'>
              ${cartItem.unit_price}
            </span>
          </div>
        </div>

        <div className='inline-flex items-center justify-between'>
          <div className='inline-flex w-10 grid-rows-3 '>
            <button
              className='px-3 py-1 border border-gray-500'
              onClick={() => handleMinusItem(cartItem.id)}
            >
              -
            </button>
            <span className='px-3 py-1 border-gray-500 border-y'>
              {cartItem.quantity}
            </span>
            <button
              className='px-3 py-1 border border-gray-500'
              onClick={() => handleAddItem(cartItem.id)}
            >
              +
            </button>
          </div>
          <button
            className='text-gray-600 border-b border-gray-500'
            onClick={() => handleRemoveItem(cartItem.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
