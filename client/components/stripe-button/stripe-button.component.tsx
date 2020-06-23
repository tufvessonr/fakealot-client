import axios from 'axios';
import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { formatCurrency } from '../../utils/currency.utils';

interface IStripeButton {
  price: number;
}
export const StripeButton: React.FC<IStripeButton> = ({
  price,
}): JSX.Element => {
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';

  const onToken = (token: Token): void => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: price,
        token: token,
      },
    })
      .then((response: unknown) => {
        console.log(`Stripe response: `, response);
      })
      .catch((error: Error) => {
        console.log('Payment Error: ', error);
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="fakealot"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${formatCurrency(price)}`}
      amount={price}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
