import { ICartItem } from '../../types/cart/cart.types';
import { formatCurrency } from '../../utils/currency.utils';
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
} from './cart.styles';

interface ICartItemProps {
  item: ICartItem;
}
export const CartItem: React.FC<ICartItemProps> = ({
  item: { image: imageUrl, price, name, quantity },
}): JSX.Element => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {formatCurrency(price, true)}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);
