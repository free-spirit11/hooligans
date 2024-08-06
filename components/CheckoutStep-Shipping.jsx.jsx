import { useCartShippingOptions } from 'medusa-react';
import { useState } from 'react';
import CartDBUpdater from './CartDBUpdater';
import Link from 'next/link';

export default function Shipping({ cartId }) {
  const { shipping_options, isLoading } = useCartShippingOptions(cartId);
  const [shippingMethod, setShippingMethod] = useState({
    option_id: '',
  });

  const handleShippingOptionChange = (optionId) => {
    setShippingMethod({ option_id: optionId });
  };

  return (
    <div className='p-6'>
      <h2 className='mb-4 font-bold'>Shipping Method</h2>
      <div className='flex flex-col'>
        {shipping_options &&
          shipping_options.map((shippingOption) => (
            <label
              className='flex items-center justify-between p-4 border border-gray-300 cursor-pointer'
              key={shippingOption.id}
            >
              <input
                type='radio'
                id={shippingOption.id}
                name='shippingOption'
                className='flex items-start justify-start w-5 h-5 cursor-pointer'
                onChange={() => handleShippingOptionChange(shippingOption.id)}
              />
              <span>{shippingOption.name}</span>
              <span>{shippingOption.amount}</span>
            </label>
          ))}
      </div>
      <div className='flex justify-between mt-4'>
        <Link className='mt-4 text-blue-700' href='/store/checkout?step=1'>
          Return to Information
        </Link>
        <div>
          <CartDBUpdater
            cartId={cartId}
            tailwindCl='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'
            buttonName='Continue to Payment'
            routeToGo='/store/checkout?step=3'
            shippingMethod={shippingMethod}
          />
        </div>
      </div>
    </div>
  );
}
