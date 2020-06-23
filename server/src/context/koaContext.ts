import { Middleware } from 'koa';

import { runInContext } from './context';

const CORRELATION_HEADER = 'X-Correlation-Id';

export function createRequestContextMiddleware(): Middleware {
  return async (koaContext, nextKoaMiddleware) => {
    await runInContext((context) => {
      const clientCorrelationId = koaContext.get(CORRELATION_HEADER);
      koaContext.set(CORRELATION_HEADER, context.id);
      return nextKoaMiddleware();
    }, koaContext.state);
  };
}
