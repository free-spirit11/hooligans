import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useCompleteCart } from 'medusa-react';

const StripePaymentForm = ({ cartId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const completeCart = useCompleteCart(cartId);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        // return_url: 'https://example.com/order/123/complete',
      },
      redirect: 'if_required',
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      console.log(result);
      if (
        result.paymentIntent &&
        result.paymentIntent.status === 'requires_capture'
      ) {
        completeCart.mutate(void 0, {
          onSuccess: ({ data, type }) => {
            console.log(data.id, type);
          },
        });
      }
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form>
      <PaymentElement />
      <div className='flex justify-between mt-4'>
        <button
          className='px-6 py-3 mt-4 text-xs text-gray-300 bg-black'
          onClick={handleSubmit}
        >
          Pay Now
        </button>
      </div>
      {/* <button disabled={!stripe}>Submit payment</button> */}
    </form>
  );
};

export default StripePaymentForm;
