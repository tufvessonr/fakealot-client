import { IProduct } from '../../types/product/product.types';

export interface IInventoryState {
  products: IProduct[];
  currentProduct?: IProduct;
}

export enum InventoryActionTypes {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT',

  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
}

export interface ILoadProducts {
  type: InventoryActionTypes.LOAD_PRODUCTS;
  payload: IProduct[];
}

export interface ISetCurrentDeparment {
  type: InventoryActionTypes.SET_CURRENT_PRODUCT;
  payload: IProduct;
}

export interface IAddProduct {
  type: InventoryActionTypes.ADD_PRODUCT;
  payload?: IProduct;
}

export interface IRemoveProduct {
  type: InventoryActionTypes.REMOVE_PRODUCT;
  payload?: IProduct;
}

export interface IEditProduct {
  type: InventoryActionTypes.EDIT_PRODUCT;
  payload?: IProduct;
}

export type InventoryAction =
  | ILoadProducts
  | ISetCurrentDeparment
  | IAddProduct
  | IRemoveProduct
  | IEditProduct;
