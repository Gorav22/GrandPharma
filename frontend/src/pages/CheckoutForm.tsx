import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: 'Customer Name',
      },
    });

    if (error) {
      setError(error.message);
    } else {
      // Send the paymentMethod.id to your server to create a PaymentIntent
      try {
        const response = await axios.post('your-server-endpoint', {
          paymentMethodId: paymentMethod.id,
          amount: 1000, // Replace with the actual amount
        });

        if (response.data.success) {
          setSuccess(true);
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Checkout</h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-500 mt-2">Payment successful!</div>}
      <button
        type="submit"
        disabled={!stripe}
        className="mt-4 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
