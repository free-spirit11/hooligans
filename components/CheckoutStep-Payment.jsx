import { useCreatePaymentSession, useSetPaymentSession } from 'medusa-react';
import { useEffect, useState } from 'react';
import StripeContainer from './StripeContainer';
import Link from 'next/link';

export default function Payment({ cartId }) {
  const [paymentSessions, setPaymentSessions] = useState();
  const createPaymentSession = useCreatePaymentSession(cartId);
  const setPaymentSession = useSetPaymentSession(cartId);

  const [selectedPaymentProvider, setSelectedPaymentProvider] = useState({
    provider_id: 'manual',
  });

  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    createPaymentSession.mutate(void 0, {
      onSuccess: ({ cart }) => {
        setPaymentSessions(cart.payment_sessions);
        console.log('payment sessions', cart.payment_sessions);
      },
    });
  }, []);

  useEffect(() => {
    setPaymentSession.mutate(
      selectedPaymentProvider,

      {
        onSuccess: ({ cart }) => {
          setClientSecret(cart.payment_session.data.client_secret);
          // console.log(cart.payment_session.data.client_secret);
          console.log(cart);
        },
      }
    );
  }, [selectedPaymentProvider]);

  const handleProviderSelect = (provider_id) => {
    setSelectedPaymentProvider({ provider_id });
  };

  return (
    <div className='p-6'>
      <h2 className='mb-4 font-bold'>Selet your payment method</h2>
      {paymentSessions &&
        paymentSessions.map((session) => (
          <label className='flex gap-1' key={session.id}>
            <input
              type='radio'
              id={session.provider_id}
              name='paymentProvider'
              value={selectedPaymentProvider}
              onChange={() => handleProviderSelect(session.provider_id)}
            />
            <span>{session.provider_id}</span>
          </label>
        ))}

      {selectedPaymentProvider.provider_id === 'stripe' && (
        <StripeContainer clientSecret={clientSecret} cartId={cartId} />
      )}

      {/* <PaymentProviders cartId={cartId} /> */}
      {/* <input
        type='text'
        placeholder='Card Number'
        className='w-full max-w-md mb-4 input input-bordered'
      />
      <input
        type='text'
        placeholder='Name on card'
        className='w-full max-w-md mb-4 input input-bordered'
      />
      <input
        type='text'
        placeholder='Expiration date (MM/YY)'
        className='w-full max-w-xs mb-4 input input-bordered'
      />
      <input
        type='text'
        placeholder='Security code'
        className='w-full max-w-xs mb-4 input input-bordered'
      />
      <div className='form-control'>
        <label className='cursor-pointer label'>
          <input type='checkbox' className='checkbox' defaultChecked />
          <span className='ml-2 label-text'>
            Use a different billing address
          </span>
        </label>
      </div> */}
      <div className='flex justify-between mt-4'>
        <Link href='/store/checkout?step=2' className='mt-4 text-blue-700'>
          {' '}
          Return to Shipping
        </Link>
        {/* <button className='mt-4 text-blue-700'>
          Return to Shipping
        </button> */}
        {/* <button className='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'>
          Pay Now
        </button> */}
      </div>
    </div>
  );
}
