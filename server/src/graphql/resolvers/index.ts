import { DateTimeResolver, JSONResolver } from 'graphql-scalars';

import { AuthenticationError } from 'apollo-server-koa';
import { IResolvers as IApolloResolvers } from 'graphql-tools';
import { IRequestContext } from '../../context/context';

import { enums } from './enums';

import {
  IResolvers,
  Resolver,
  ResolverFn,
  LegacyStitchingResolver,
  NewStitchingResolver,
} from '../generated-types';
import { getProduct, loadProducts } from './queries/product';
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from './mutations/product';
import { productImages } from './queries/upload';
import { uploadProductImage } from './mutations/upload';

const resolvers: IResolvers = {
  Query: {
    getProduct: getProduct,
    loadProducts: loadProducts,
    productImages: productImages,
  },
  Mutation: {
    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    uploadProductImage: uploadProductImage,
  },
};

const combined: IApolloResolvers = {
  ...(resolvers as IApolloResolvers),
  ...enums,
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
};

export default combined;

export function authenticated<TResult, TParent, TArgs>(
  fn: Resolver<TResult, TParent, IRequestContext, TArgs> | undefined
): Resolver<TResult, TParent, IRequestContext, TArgs> {
  if (
    (fn as LegacyStitchingResolver<TResult, TParent, IRequestContext, TArgs>)
      .fragment ||
    (fn as NewStitchingResolver<TResult, TParent, IRequestContext, TArgs>)
      .selectionSet
  ) {
    throw new Error('Stitching resolvers not supported.');
  }

  const resolver = fn as ResolverFn<TResult, TParent, IRequestContext, TArgs>;

  return function (parent, args, context, info) {
    if (!context.user) {
      throw new AuthenticationError('Access Denied');
    }

    return resolver(parent, args, context, info);
  };
}
