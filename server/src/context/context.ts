import { IMappedUserDetails } from '../types/user';
import { generateUuid } from '../lib/uuid';
import { mapUser } from './helper';

export interface IRequestContext {
  id: string;
  user?: IMappedUserDetails;
}

export async function runInContext(
  action: (context: IRequestContext) => Promise<void>,
  origContext?: any
): Promise<void> {
  origContext = origContext || {};
  const id = generateUuid();

  console.log(`Starting request '${id}'`);

  const context = Object.assign(origContext, {
    id,
    user: mapUser(origContext.user),
  });

  try {
    await action(context);
  } catch (ex) {
    console.error('Unhandled error', ex);

    throw ex;
  } finally {
    try {
    } finally {
      console.log(`Completed request '${context.id}'`);
    }
  }
}
