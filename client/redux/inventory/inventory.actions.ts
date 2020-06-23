import { Dispatch } from 'redux';

import { IProduct } from '../../types/product/product.types';
import { RootAction } from '../store';
import { InventoryActionTypes } from './inventory.types';

export const loadProducts = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const products: IProduct[] = []; //TODO: add logic

    dispatch({
      type: InventoryActionTypes.LOAD_PRODUCTS,
      payload: products,
    });
  };
};

export const addProduct = (product: IProduct) => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    //TODO: add product logic
    console.log(product);

    // dispatch({
    //   type: InventoryActionTypes.ADD_PRODUCT,
    //   payload: product,
    // });
  };
};

export const editProduct = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const product = undefined; //TODO: add logic

    dispatch({
      type: InventoryActionTypes.EDIT_PRODUCT,
      payload: product,
    });
  };
};

export const removeProduct = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const product = undefined; //TODO: add logic

    dispatch({
      type: InventoryActionTypes.REMOVE_PRODUCT,
      payload: product,
    });
  };
};
