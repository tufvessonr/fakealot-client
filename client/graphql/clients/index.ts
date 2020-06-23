import { IProductClient, ProductClient } from './product';

export interface IGQLClient {
  readonly Product: IProductClient;
}

export const gqlClient = new (class GQLClient implements IGQLClient {
  private productClient?: IProductClient;

  get Product() {
    return this.productClient || (this.productClient = new ProductClient());
  }
})();
