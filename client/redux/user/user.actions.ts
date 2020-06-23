import { ISetCurrentUser, IUser, UserActionType } from './user.types';

export const setCurrentUser = (user: IUser | null): ISetCurrentUser => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
