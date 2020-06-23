import { MutationResolvers, Product } from '../../generated-types';
import {
  validateCreateProductArgs,
  validateUpdateProductArgs,
  validateDeleteProductArgs,
} from '../../validations/product';

export const createProduct: MutationResolvers['createProduct'] = async function createProduct(
  parent,
  args,
  ctx
): Promise<Product | null> {
  const { product } = await validateCreateProductArgs(args);

  return null;
};

export const updateProduct: MutationResolvers['updateProduct'] = async function updateProduct(
  parent,
  args,
  ctx
): Promise<Product | null> {
  const { product } = await validateUpdateProductArgs(args);

  return null;
};

export const deleteProduct: MutationResolvers['deleteProduct'] = async function deleteProduct(
  parent,
  args,
  ctx
): Promise<boolean> {
  const { id } = await validateDeleteProductArgs(args);

  return false;
};
