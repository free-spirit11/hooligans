import { useSetPaymentSession, useGetCart } from 'medusa-react';
import { useEffect, useState } from 'react';
import StripeContainer from './StripeContainer';
import Link from 'next/link';

export default function Payment({ cartId }) {
  const setPaymentSession = useSetPaymentSession(cartId);
  const { cart, isLoading } = useGetCart(cartId);

  const [selectedPaymentProvider, setSelectedPaymentProvider] = useState({
    provider_id: 'manual',
  });

  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    setPaymentSession.mutate(
      selectedPaymentProvider,

      {
        onSuccess: ({ cart }) => {
          setClientSecret(cart.payment_session.data.client_secret);
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
      {cart?.payment_sessions &&
        cart?.payment_sessions.map((session) => (
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

      <div className='flex justify-between mt-4'>
        <Link href='/store/checkout?step=2' className='mt-4 text-blue-700'>
          {' '}
          Return to Shipping
        </Link>
      </div>
    </div>
  );
}
