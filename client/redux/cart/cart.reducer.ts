import { MOCK_CART_STATE } from '../../__mock/mock';
import { RootAction } from '../store';
import { CartActionTypes, ICartState } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

let INITIAL_STATE: ICartState = {
  hidden: true,
  cartItems: [],
};

INITIAL_STATE = MOCK_CART_STATE;

export const cartReducer = (
  state: ICartState = INITIAL_STATE,
  action: RootAction
): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
