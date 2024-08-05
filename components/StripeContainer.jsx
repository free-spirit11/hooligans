import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import StripePaymentForm from './StripePaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function StripeContainer({ clientSecret, cartId }) {
  return (
    <div>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
          }}
        >
          <StripePaymentForm clientSecret={clientSecret} cartId={cartId} />
        </Elements>
      )}
    </div>
  );
}
