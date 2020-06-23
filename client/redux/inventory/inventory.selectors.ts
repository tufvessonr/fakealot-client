import { createSelector } from 'reselect';

import { IRootState } from '../store';

const selectProduct = (state: IRootState) => state.inventory;

export const selectProducts = createSelector(
  [selectProduct],
  (product) => product.products
);

export const selectCurrentProduct = createSelector(
  [selectProduct],
  (product) => product.currentProduct
);
