import { importSchema } from 'graphql-import';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import { ParameterizedContext } from 'koa';
import { ExecutionParams } from 'subscriptions-transport-ws';

import { IRequestContext } from '../context/context';

import resolvers from './resolvers';
import { ApolloServer } from 'apollo-server-koa';

const typeDefs = importSchema(`${__dirname}/schema/schema.graphql`);

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
  })
);

type GqlWsContext = { connection: ExecutionParams };
type GqlHttpContext = { ctx: ParameterizedContext<IRequestContext> };

export function createGqlServer(): ApolloServer {
  const server = new ApolloServer({
    schema,
    mocks: false,
    mockEntireSchema: false,

    context: function createContext(
      gqlContext: GqlHttpContext | GqlWsContext
    ): IRequestContext {
      return isWsContext(gqlContext)
        ? gqlContext.connection.context
        : gqlContext.ctx.state;
    },
  });

  return server;
}

function isWsContext(
  gqlCtx: GqlHttpContext | GqlWsContext
): gqlCtx is GqlWsContext {
  return !!(gqlCtx as GqlWsContext).connection;
}
