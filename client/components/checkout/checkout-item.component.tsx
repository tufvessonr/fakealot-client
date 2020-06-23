import {
  faMinusCircle,
  faPlusCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';
import { RootAction } from '../../redux/store';
import { ICartItem } from '../../types/cart/cart.types';
import { formatCurrency } from '../../utils/currency.utils';
import {
  CheckoutImageContainer,
  CheckoutItemContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutRemoveItemContainer,
} from './checkout.styles';

interface ICheckoutItem {
  item: ICartItem;
}
export const CheckoutItem: React.FC<ICheckoutItem> = ({ item }) => {
  const { name, image, price, quantity } = item;
  console.log(getProduct);

  const dispatch = useDispatch<Dispatch<RootAction>>();

  const onAdd = (event: React.KeyboardEvent | React.MouseEvent): void => {
    const keyCode = (event as React.KeyboardEvent).keyCode;
    console.log(keyCode);

    if (!keyCode || (keyCode && keyCode === 13)) {
      addItem(item)(dispatch);
    }
  };

  const onRemove = (event: React.KeyboardEvent | React.MouseEvent): void => {
    const keyCode = (event as React.KeyboardEvent).keyCode;
    if (!keyCode || (keyCode && keyCode === 13)) {
      removeItem(item)(dispatch);
    }
  };

  const onClear = (event: React.KeyboardEvent | React.MouseEvent): void => {
    const keyCode = (event as React.KeyboardEvent).keyCode;
    if (!keyCode || (keyCode && keyCode === 13)) {
      clearItemFromCart(item)(dispatch);
    }
  };

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={image} alt="item" />
      </CheckoutImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <div onClick={onRemove} onKeyUp={onRemove} role="presentation">
          <FontAwesomeIcon icon={faMinusCircle} height={5} width={5} />
        </div>
        <span>{quantity}</span>
        <div onClick={onAdd} onKeyUp={onAdd} role="presentation">
          <FontAwesomeIcon icon={faPlusCircle} height={5} width={5} />
        </div>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{formatCurrency(price * quantity)}</CheckoutItemPrice>
      <CheckoutRemoveItemContainer
        onClick={onClear}
        onKeyUp={onClear}
        role="presentation"
      >
        <FontAwesomeIcon icon={faTrash} height={5} width={5} />
      </CheckoutRemoveItemContainer>
    </CheckoutItemContainer>
  );
};
