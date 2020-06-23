import { IProduct } from '../../types/product/product.types';
import { graphQLSdk } from './graphQLSdk';

export interface IProductClient {
  getProduct: (productId: string) => Promise<IProduct | undefined>;
}
export class ProductClient implements IProductClient {
  async getProduct(productId: string): Promise<IProduct | undefined> {
    const { getProduct } = await graphQLSdk().getProduct({ productId });
    console.log(getProduct);
    if (!getProduct) {
      return undefined;
    }

    return undefined;
  }
}
