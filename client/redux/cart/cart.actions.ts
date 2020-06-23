import { Dispatch } from 'redux';

import { ICartItem } from '../../types/cart/cart.types';
import { RootAction } from '../store';
import { CartActionTypes } from './cart.types';
import { gqlClient } from '../../graphql/clients';

export const addItem = (item: ICartItem) => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    await gqlClient.Product.getProduct('353b1718-2476-467a-b86c-98d62a3f8878');

    const department = undefined; //TODO: add logic

    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: item,
    });
  };
};

export const removeItem = (item: ICartItem) => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const department = undefined; //TODO: add logic

    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: item,
    });
  };
};

export const clearItemFromCart = (item: ICartItem) => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const department = undefined; //TODO: add logic

    dispatch({
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: item,
    });
  };
};
