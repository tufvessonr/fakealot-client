import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import Router from 'koa-router';
import { notImplemented, methodNotAllowed, isBoom, boomify } from '@hapi/boom';

import CONFIG from './config';
import { createGqlServer } from './graphql/server';
import { WebServer } from './server/webServer';
import main from './server/main';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    const err = isBoom(e) ? e : boomify(e);

    ctx.response.status = err.output.statusCode;
    ctx.response.body = err.output.payload.message;
  }
});

const router = new Router();
// TODO: add routes as needed

app.use(bodyparser());
app.use(router.routes());
app.use(
  router.allowedMethods({
    throw: true,
    notImplemented: () => notImplemented(),
    methodNotAllowed: () => methodNotAllowed(),
  })
);

const graphqlServer = createGqlServer();

graphqlServer.applyMiddleware({
  app: app as any,
  cors: true,
});

const server = new WebServer(app.callback());
graphqlServer.installSubscriptionHandlers(server.server);

main(
  async () => {
    const PORT = CONFIG.PORT;
    console.log(`Running on http://localhost:${PORT}/`);
    await server.listen({ port: PORT });
  },

  async () => {
    console.log(`Shutting down`);
    await server.shutdown();
  }
);
