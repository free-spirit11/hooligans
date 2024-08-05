import React, { useState } from 'react';
import Link from 'next/link';
import CartDBUpdater from './CartDBUpdater';
import { useCartShippingOptions } from 'medusa-react';

export default function Information({ onNext, cartId }) {
  const [formData, setFormData] = useState({
    email: '',
    shipping_address: {
      first_name: '',
      last_name: '',
      phone: '',
      address_1: '',
      address_2: '',
      city: '',
      country_code: 'us', // 2 character iso code in lower case
      province: '',
      postal_code: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        shipping_address: {
          ...prevData.shipping_address,
          [name]: value,
        },
      }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Do any additional logic if needed
  //   onNext();
  // };

  return (
    <div className='pb-5'>
      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Email</span>
        </label>
        <input
          type='email'
          name='email'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>First Name</span>
        </label>
        <input
          type='text'
          name='first_name'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.first_name}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Last Name</span>
        </label>
        <input
          type='text'
          name='last_name'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.last_name}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Phone</span>
        </label>
        <input
          type='text'
          name='phone'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.phone}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Address 1</span>
        </label>
        <input
          type='text'
          name='address_1'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.address_1}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Address 2</span>
        </label>
        <input
          type='text'
          name='address_2'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.address_2}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>City</span>
        </label>
        <input
          type='text'
          name='city'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.city}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label>
          <span className='text-gray-500'>Post Code</span>
        </label>
        <input
          type='text'
          name='postal_code'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.postal_code}
          onChange={handleChange}
        />
      </div>

      <div className='my-3'>
        <label className='text-gray-500'>Country</label>
        <select
          name='country_code'
          className='appearance-none w-full px-2 py-1.5 text-gray-700 bg-white bg-clip-padding bg-no-repeat border-b border-black focus:outline-none'
          value={formData.shipping_address.country_code}
          onChange={handleChange}
        >
          <option value='us'>United States</option>
          <option value='other'>Other Countries...</option>
        </select>
      </div>

      <div className='my-3'>
        <label className='text-gray-500'>State</label>
        <input
          type='text'
          name='province'
          className='w-full py-2 border-b border-black focus:outline-none'
          value={formData.shipping_address.province}
          onChange={handleChange}
        />
      </div>

      <div className='flex flex-col'>
        <label>
          <input type='checkbox' className='cursor-pointer' />
          <span className='ml-2'>Save this information for next time</span>
        </label>
        <label>
          <input type='checkbox' className='cursor-pointer' />
          <span className='ml-2'>
            My delivery and billing addresses are the same.
          </span>
        </label>
        <label>
          <input type='checkbox' className='cursor-pointer' />
          <span className='ml-2'>
            I have read and agree to the Terms & Conditions
          </span>
        </label>
      </div>

      <div className='flex justify-between'>
        <Link href='/'>
          <button className='mt-4 text-blue-700'>Return to the Homepage</button>
        </Link>
        <div onClick={onNext}>
          <CartDBUpdater
            cartId={cartId}
            tailwindCl='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'
            buttonName='Continue to Shipping'
            // routeToGo='/store/checkout'
            additionalCartInfo={formData}
          />
        </div>
      </div>
    </div>
  );
}
