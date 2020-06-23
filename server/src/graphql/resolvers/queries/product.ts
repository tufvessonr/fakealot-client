import { QueryResolvers, Product } from '../../generated-types';
import {
  validateGetProductArgs,
  validateLoadProductsArgs,
} from '../../validations/product';

export const getProduct: QueryResolvers['getProduct'] = async function getProduct(
  parent,
  args,
  ctx
): Promise<Product | null> {
  const { productId } = await validateGetProductArgs(args);
  console.log(`productId: ${productId}`);

  return null;
};

export const loadProducts: QueryResolvers['loadProducts'] = async function loadProducts(
  parent,
  args,
  ctx
): Promise<Product[]> {
  const { options } = await validateLoadProductsArgs(args);

  return [];
};
