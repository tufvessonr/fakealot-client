import { MOCK_INVENTORY_STATE } from '../../__mock/mock';
import { RootAction } from '../store';
import { IInventoryState, InventoryActionTypes } from './inventory.types';
import { addProduct, editProduct, removeProduct } from './inventory.utils';

let INITIAL_STATE: IInventoryState = {
  products: [],
  currentProduct: undefined,
};

INITIAL_STATE = MOCK_INVENTORY_STATE;

export const inventoryReducer = (
  state: IInventoryState = INITIAL_STATE,
  action: RootAction
): IInventoryState => {
  switch (action.type) {
    case InventoryActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case InventoryActionTypes.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case InventoryActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: addProduct(state.products, action.payload),
      };
    case InventoryActionTypes.EDIT_PRODUCT:
      return {
        ...state,
        products: editProduct(state.products, action.payload),
      };
    case InventoryActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: removeProduct(state.products, action.payload),
      };
    default:
      return state;
  }
};
