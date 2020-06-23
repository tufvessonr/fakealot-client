import { Middleware } from 'koa';
import jwt from 'koa-jwt';

// TODO: Use it
/** Middleware that only checks JWT if supplied */
export function createAuthMiddleware(options: jwt.Options): Middleware {
  const authMiddleware = jwt(options);

  return async (ctx, next) => {
    const authHeader = ctx.get('Authorization');

    if (authHeader && authHeader !== '') {
      await authMiddleware(ctx, next);
    } else {
      await next();
    }
  };
}
