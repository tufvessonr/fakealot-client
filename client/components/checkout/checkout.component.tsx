import { useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { StripeButton } from '../stripe-button/stripe-button.component';
import { CheckoutItem } from './checkout-item.component';
import {
  CheckoutContainer,
  CheckoutControls,
  CheckoutInnerContainer,
} from './checkout.styles';

export const Checkout: React.FC = (): JSX.Element => {
  const items = useSelector(selectCartItems);
  const total = items.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
  return (
    <CheckoutContainer>
      <CheckoutInnerContainer>
        {items.map((item, index) => (
          <CheckoutItem key={`checkout_item_${index}`} item={item} />
        ))}
        <CheckoutControls>
          <StripeButton price={total} />
        </CheckoutControls>
      </CheckoutInnerContainer>
    </CheckoutContainer>
  );
};
