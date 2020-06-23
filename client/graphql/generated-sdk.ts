import { LocalDate } from 'js-joda';
import { DateTimeResolver, JSONResolver } from 'graphql-scalars';
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  JSONObject: any;
  DateTime: Date;
  Upload: any;
};





export type Query = {
  __typename?: 'Query';
  getProduct?: Maybe<Product>;
  loadProducts: Array<Maybe<Product>>;
  productImages: Array<Maybe<FileData>>;
};


export type QueryGetProductArgs = {
  productId: Scalars['ID'];
};


export type QueryLoadProductsArgs = {
  options: LoadProductInput;
};


export type QueryProductImagesArgs = {
  id: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  availability: Availability;
  brand: Scalars['String'];
  department: Department;
  description?: Maybe<Scalars['String']>;
  discount: Discount;
  discountRange?: Maybe<DiscountRange>;
  id: Scalars['ID'];
  images: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  rating: Rating;
  tags: Array<Maybe<Scalars['String']>>;
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Int'];
  primary: Scalars['Boolean'];
  subDepartments: Array<Maybe<Department>>;
};

export type DiscountRange = {
  __typename?: 'DiscountRange';
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export enum Discount {
  Zero = 'ZERO',
  Five = 'FIVE',
  Ten = 'TEN',
  Fifteen = 'FIFTEEN',
  Twenty = 'TWENTY',
  TwentyFive = 'TWENTY_FIVE',
  Thirty = 'THIRTY',
  ThirtyFive = 'THIRTY_FIVE',
  Forty = 'FORTY',
  FortyFive = 'FORTY_FIVE',
  Fifty = 'FIFTY',
  FiftyFive = 'FIFTY_FIVE',
  Sixty = 'SIXTY'
}

export enum Availability {
  ThreeDays = 'THREE_DAYS',
  OneWeek = 'ONE_WEEK',
  TwoWeeks = 'TWO_WEEKS',
  OneMonth = 'ONE_MONTH',
  NoStock = 'NO_STOCK',
  InStock = 'IN_STOCK'
}

export enum Rating {
  None = 'NONE',
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  Five = 'FIVE'
}

export type LoadProductInput = {
  availability?: Maybe<Availability>;
  departmentId?: Maybe<Scalars['ID']>;
  keyword?: Maybe<Scalars['String']>;
  rating?: Maybe<Rating>;
};

export type FileData = {
  __typename?: 'FileData';
  expires: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  deleteProduct: Scalars['Boolean'];
  updateProduct?: Maybe<Product>;
  uploadProductImage?: Maybe<Scalars['Upload']>;
};


export type MutationCreateProductArgs = {
  product: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationUpdateProductArgs = {
  product: UpdateProductInput;
};


export type MutationUploadProductImageArgs = {
  file: Scalars['Upload'];
  id: Scalars['ID'];
};

export type CreateProductInput = {
  availability: Availability;
  brand: Scalars['String'];
  department: DepartmentInput;
  description?: Maybe<Scalars['String']>;
  discount: Discount;
  discountRange?: Maybe<DiscountRangeInput>;
  images: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  rating: Rating;
  tags: Array<Maybe<Scalars['String']>>;
};

export type DepartmentInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Int'];
  primary: Scalars['Boolean'];
  subDepartments: Array<Maybe<DepartmentInput>>;
};

export type DiscountRangeInput = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type UpdateProductInput = {
  availability?: Maybe<Availability>;
  brand?: Maybe<Scalars['String']>;
  department?: Maybe<DepartmentInput>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  discountRange?: Maybe<DiscountRangeInput>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  rating?: Maybe<Rating>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateProductMutationVariables = Exact<{
  product: CreateProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type GetProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type LoadProductsQueryVariables = Exact<{
  options: LoadProductInput;
}>;


export type LoadProductsQuery = (
  { __typename?: 'Query' }
  & { loadProducts: Array<Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )>> }
);

export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'brand' | 'name' | 'description' | 'price' | 'discount' | 'quantity' | 'availability' | 'rating' | 'tags' | 'images'>
  & { department: (
    { __typename?: 'Department' }
    & Pick<Department, 'id' | 'name' | 'weight' | 'primary'>
    & { subDepartments: Array<Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'id' | 'name' | 'weight' | 'primary'>
    )>> }
  ), discountRange?: Maybe<(
    { __typename?: 'DiscountRange' }
    & Pick<DiscountRange, 'start' | 'end'>
  )> }
);

export type ProductImagesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductImagesQuery = (
  { __typename?: 'Query' }
  & { productImages: Array<Maybe<(
    { __typename?: 'FileData' }
    & Pick<FileData, 'url' | 'expires'>
  )>> }
);

export type UploadProductImageMutationVariables = Exact<{
  id: Scalars['ID'];
  file: Scalars['Upload'];
}>;


export type UploadProductImageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadProductImage'>
);

export const ProductFieldsFragmentDoc = gql`
    fragment productFields on Product {
  id
  department {
    id
    name
    weight
    primary
    subDepartments {
      id
      name
      weight
      primary
    }
  }
  brand
  name
  description
  price
  discount
  discountRange {
    start
    end
  }
  quantity
  availability
  rating
  tags
  images
}
    `;
export const CreateProductDocument = gql`
    mutation createProduct($product: CreateProductInput!) {
  createProduct(product: $product) {
    ...productFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const GetProductDocument = gql`
    query getProduct($productId: ID!) {
  getProduct(productId: $productId) {
    ...productFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const LoadProductsDocument = gql`
    query loadProducts($options: LoadProductInput!) {
  loadProducts(options: $options) {
    ...productFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const ProductImagesDocument = gql`
    query ProductImages($id: ID!) {
  productImages(id: $id) {
    url
    expires
  }
}
    `;
export const UploadProductImageDocument = gql`
    mutation UploadProductImage($id: ID!, $file: Upload!) {
  uploadProductImage(id: $id, file: $file)
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createProduct(variables: CreateProductMutationVariables): Promise<CreateProductMutation> {
      return withWrapper(() => client.request<CreateProductMutation>(print(CreateProductDocument), variables));
    },
    getProduct(variables: GetProductQueryVariables): Promise<GetProductQuery> {
      return withWrapper(() => client.request<GetProductQuery>(print(GetProductDocument), variables));
    },
    loadProducts(variables: LoadProductsQueryVariables): Promise<LoadProductsQuery> {
      return withWrapper(() => client.request<LoadProductsQuery>(print(LoadProductsDocument), variables));
    },
    ProductImages(variables: ProductImagesQueryVariables): Promise<ProductImagesQuery> {
      return withWrapper(() => client.request<ProductImagesQuery>(print(ProductImagesDocument), variables));
    },
    UploadProductImage(variables: UploadProductImageMutationVariables): Promise<UploadProductImageMutation> {
      return withWrapper(() => client.request<UploadProductImageMutation>(print(UploadProductImageDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const ProductFields = gql`
    fragment productFields on Product {
  id
  department {
    id
    name
    weight
    primary
    subDepartments {
      id
      name
      weight
      primary
    }
  }
  brand
  name
  description
  price
  discount
  discountRange {
    start
    end
  }
  quantity
  availability
  rating
  tags
  images
}
    `;
export const CreateProduct = gql`
    mutation createProduct($product: CreateProductInput!) {
  createProduct(product: $product) {
    ...productFields
  }
}
    ${ProductFields}`;
export const GetProduct = gql`
    query getProduct($productId: ID!) {
  getProduct(productId: $productId) {
    ...productFields
  }
}
    ${ProductFields}`;
export const LoadProducts = gql`
    query loadProducts($options: LoadProductInput!) {
  loadProducts(options: $options) {
    ...productFields
  }
}
    ${ProductFields}`;
export const ProductImages = gql`
    query ProductImages($id: ID!) {
  productImages(id: $id) {
    url
    expires
  }
}
    `;
export const UploadProductImage = gql`
    mutation UploadProductImage($id: ID!, $file: Upload!) {
  uploadProductImage(id: $id, file: $file)
}
    `;

