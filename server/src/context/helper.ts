import { IMappedUserDetails, ITokenContent } from '../types/user';

export function mapUser(
  tokenContent?: ITokenContent
): IMappedUserDetails | undefined {
  if (!tokenContent) {
    return undefined;
  }
  return {
    userId: tokenContent.user.user_id,
    userName: tokenContent.user.username,
    fullName: tokenContent.user.full_name,
  };
}
