import { IRequestContext } from '~/context/context';
import { Discount } from '~/types/enums';
import { Rating } from '~/types/enums';
import { DateTimeResolver, JSONResolver } from 'graphql-scalars';
import { LocalDate } from 'js-joda';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Availability } from '~/types/enums';
import { GraphQLUpload } from 'graphql-upload';
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Maybe<T> = T | null;
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
  Upload: GraphQLUpload;
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

export { Discount };

export { Availability };

export { Rating };

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
  images: Array<Maybe<Scalars['Upload']>>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Product: ResolverTypeWrapper<Product>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Department: ResolverTypeWrapper<Department>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DiscountRange: ResolverTypeWrapper<DiscountRange>;
  Discount: Discount;
  Availability: Availability;
  Rating: Rating;
  LoadProductInput: LoadProductInput;
  FileData: ResolverTypeWrapper<FileData>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateProductInput: CreateProductInput;
  DepartmentInput: DepartmentInput;
  DiscountRangeInput: DiscountRangeInput;
  UpdateProductInput: UpdateProductInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  DateTime: Scalars['DateTime'];
  Upload: Scalars['Upload'];
  Query: {};
  ID: Scalars['ID'];
  Product: Product;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Department: Department;
  Boolean: Scalars['Boolean'];
  DiscountRange: DiscountRange;
  LoadProductInput: LoadProductInput;
  FileData: FileData;
  Mutation: {};
  CreateProductInput: CreateProductInput;
  DepartmentInput: DepartmentInput;
  DiscountRangeInput: DiscountRangeInput;
  UpdateProductInput: UpdateProductInput;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type QueryResolvers<ContextType = IRequestContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductArgs, 'productId'>>;
  loadProducts?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryLoadProductsArgs, 'options'>>;
  productImages?: Resolver<Array<Maybe<ResolversTypes['FileData']>>, ParentType, ContextType, RequireFields<QueryProductImagesArgs, 'id'>>;
};

export type ProductResolvers<ContextType = IRequestContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  availability?: Resolver<ResolversTypes['Availability'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  department?: Resolver<ResolversTypes['Department'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType>;
  discountRange?: Resolver<Maybe<ResolversTypes['DiscountRange']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Rating'], ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DepartmentResolvers<ContextType = IRequestContext, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  primary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  subDepartments?: Resolver<Array<Maybe<ResolversTypes['Department']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DiscountRangeResolvers<ContextType = IRequestContext, ParentType extends ResolversParentTypes['DiscountRange'] = ResolversParentTypes['DiscountRange']> = {
  start?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type DiscountResolvers = EnumResolverSignature<{ ZERO?: any, FIVE?: any, TEN?: any, FIFTEEN?: any, TWENTY?: any, TWENTY_FIVE?: any, THIRTY?: any, THIRTY_FIVE?: any, FORTY?: any, FORTY_FIVE?: any, FIFTY?: any, FIFTY_FIVE?: any, SIXTY?: any }, ResolversTypes['Discount']>;

export type AvailabilityResolvers = EnumResolverSignature<{ THREE_DAYS?: any, ONE_WEEK?: any, TWO_WEEKS?: any, ONE_MONTH?: any, NO_STOCK?: any, IN_STOCK?: any }, ResolversTypes['Availability']>;

export type RatingResolvers = EnumResolverSignature<{ NONE?: any, ONE?: any, TWO?: any, THREE?: any, FOUR?: any, FIVE?: any }, ResolversTypes['Rating']>;

export type FileDataResolvers<ContextType = IRequestContext, ParentType extends ResolversParentTypes['FileData'] = ResolversParentTypes['FileData']> = {
  expires?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = IRequestContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'product'>>;
  deleteProduct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, never>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'product'>>;
  uploadProductImage?: Resolver<Maybe<ResolversTypes['Upload']>, ParentType, ContextType, RequireFields<MutationUploadProductImageArgs, 'file' | 'id'>>;
};

export type Resolvers<ContextType = IRequestContext> = {
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Department?: DepartmentResolvers<ContextType>;
  DiscountRange?: DiscountRangeResolvers<ContextType>;
  Discount?: DiscountResolvers;
  Availability?: AvailabilityResolvers;
  Rating?: RatingResolvers;
  FileData?: FileDataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IRequestContext> = Resolvers<ContextType>;



