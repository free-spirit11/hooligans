'use client';
import { useEffect } from 'react';
import { useCreatePaymentSession } from 'medusa-react';

const PaymentProviders = ({ cartId }) => {
  const createPaymentSession = useCreatePaymentSession(cartId);

  const handleComplete = () => {
    createPaymentSession.mutate(void 0, {
      onSuccess: ({ cart }) => {
        console.log(cart.payment_sessions);
      },
    });
  };

  return (
    <div>
      {/* {!cart?.payment_sessions.length && <span>No payment processors</span>} */}
      <ul>Payment sessions</ul>
    </div>
  );
};

export default PaymentProviders;
