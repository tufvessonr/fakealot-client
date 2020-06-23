import { createSelector } from 'reselect';

import { IRootState } from '../store';
import { IUserState } from './user.types';

const selectUser = (state: IRootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: IUserState) => user.currentUser
);
