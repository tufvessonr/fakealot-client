export interface IUser extends Record<string, unknown> {
  id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
}

export interface IUserState {
  currentUser: IUser | null;
}

export enum UserActionType {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface ISetCurrentUser {
  type: UserActionType.SET_CURRENT_USER;
  payload: IUser | null;
}

export type UserAction = ISetCurrentUser;
