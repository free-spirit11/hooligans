'use client';
import { useEffect, useState } from 'react';
import { useCartContext } from '@/contexts/CartContext';
import Link from 'next/link';
import CartContent from './CartContent';

const Cart = ({ isOpen, setIsOpen, color }) => {
  const [cartId, setCartId] = useState();
  const { cart } = useCartContext();

  useEffect(() => {
    const storageCartId = localStorage.getItem('cart_id');
    if (storageCartId) {
      setCartId(storageCartId);
    }
  }, []);

  const totalQuantity =
    cart?.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0) || 0;

  return (
    <>
      {!isOpen && (
        <button
          className='flex'
          name='Shopping bag nav button'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              id='Vector'
              d='M14.02 5.3C13.62 2.58 11.3 0.5 8.5 0.5C5.7 0.5 3.3 2.58 2.98 5.3H0.5L2.9 16.5H14.1L16.5 5.3H14.02ZM8.5 2.1C10.42 2.1 12.1 3.46 12.42 5.3H4.58C4.9 3.46 6.58 2.1 8.5 2.1ZM12.82 14.9H4.18L2.5 6.9H14.58L12.82 14.9Z'
              fill={color}
            />
          </svg>
        </button>
      )}
      <div
        className={`p-4 fixed inset-y-0 right-0 w-450px bg-custom-gray z-30 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out flex flex-col`}
      >
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h1 className='text-xl'>SHOPPING BAG</h1>
          <span className='flex items-center justify-center w-6 h-6 p-2 m-2 -translate-x-20 bg-gray-300 rounded-full'>
            {totalQuantity}
          </span>

          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width='24'
              height='19'
              viewBox='0 0 24 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.51465 1L20.4852 17.9706'
                stroke='black'
                strokeWidth='2'
              />
              <path
                d='M3.51465 17.9705L20.4852 0.999897'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
          </button>
        </div>
        <div className='flex-1 overflow-y-auto '>
          {cartId && <CartContent cartId={cartId} />}
        </div>
        <div className='p-6 border-t border-gray-200'>
          <div className='flex justify-between'>
            <span>Subtotal</span>
            <span className='font-semibold '>{cart?.subtotal || 0}$</span>
          </div>
          <div className='flex-row justify-center'>
            <span className='text-xs text-gray-500 '>
              Shipment cost will be calculated at the checkout
            </span>
            <Link href='/store/checkout'>
              <button className='w-full py-4 mt-4 text-white bg-button-blue hover:bg-button-blue-hover'>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
