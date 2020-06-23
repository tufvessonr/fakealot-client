export interface IUserDetails {
  user_id: string;
  username: string;
  full_name: string;
}

export interface IMappedUserDetails {
  userId: string;
  userName: string;
  fullName: string;
}

export interface ITokenContent {
  exp: number;
  user: IUserDetails;
}
