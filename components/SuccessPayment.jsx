import Link from 'next/link';
import React, { useEffect } from 'react';
import { useShoppingBagContext } from '@/contexts/ShoppingBagContext';

const SuccessPayment = () => {
  const { resetShoppingBagContext } = useShoppingBagContext();

  useEffect(() => {
    resetShoppingBagContext();
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='p-6 text-center bg-white rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-green-500'>
          Thank you for your order!
        </h1>
        <p className='mt-4 text-lg text-gray-700'>
          Your payment has been successful.
        </p>
        <Link href='/' className='mt-4 text-lg text-blue-700'>
          Return to the Homepage
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
