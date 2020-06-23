import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cart/cart.reducer';
import { departmentReducer } from './department/department.reducer';
import { inventoryReducer } from './inventory/inventory.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cart: cartReducer,
    department: departmentReducer,
    inventory: inventoryReducer,
  })
);
