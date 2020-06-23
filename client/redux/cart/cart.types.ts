import { ICartItem } from '../../types/cart/cart.types';

export interface ICartState {
  cartItems: ICartItem[];
  hidden: boolean;
}

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',
}

export interface IAddItem {
  type: CartActionTypes.ADD_ITEM;
  payload: ICartItem;
}

export interface IRemoveItem {
  type: CartActionTypes.REMOVE_ITEM;
  payload: ICartItem;
}

export interface IClearItemFromCart {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: ICartItem;
}

export type CartAction = IAddItem | IRemoveItem | IClearItemFromCart;
