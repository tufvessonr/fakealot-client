import {
  applyMiddleware,
  CombinedState,
  createStore,
  Dispatch,
  Store,
} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { CartAction, ICartState } from './cart/cart.types';
import {
  DepartmentAction,
  IDepartmentState,
} from './department/department.types';
import { IInventoryState, InventoryAction } from './inventory/inventory.types';
import { rootReducer } from './root-reducer';
import { IUserState, UserAction } from './user/user.types';
export type RootAction =
  | UserAction
  | CartAction
  | DepartmentAction
  | InventoryAction;

const middleware = [logger, thunk];

export interface IRootState {
  user: IUserState;
  cart: ICartState;
  department: IDepartmentState;
  inventory: IInventoryState;
}

export const store: Store<CombinedState<IRootState>, RootAction> & {
  dispatch: Dispatch<RootAction>;
} = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
