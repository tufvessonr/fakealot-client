import { createValidator, shapeOf } from './validation';
import {
  QueryGetProductArgs,
  MutationCreateProductArgs,
  Department,
  DiscountRange,
  MutationUpdateProductArgs,
  CreateProductInput,
  UpdateProductInput,
  MutationDeleteProductArgs,
  QueryLoadProductsArgs,
  LoadProductInput,
} from '../generated-types';
import * as yup from 'yup';
import { Availability, Rating, Discount } from '../../types/enum';
import { uuidShape } from '../../lib/yup-utils';

// Queries
export const validateGetProductArgs = createValidator<QueryGetProductArgs>({
  productId: yup.string().required(),
});

export const validateLoadProductsArgs = createValidator<QueryLoadProductsArgs>({
  options: yup.object<LoadProductInput>({
    availability: shapeOf(Availability),
    departmentId: uuidShape,
    keyword: yup.string(),
    rating: shapeOf(Rating),
  }),
});

//Mutations
const departmentShape = yup.object<Department>({
  id: uuidShape.required(),
  name: yup.string().required(),
  primary: yup.boolean().required(),
  weight: yup.number().required(),
  subDepartments: yup.mixed<Department[]>().required(),
});

export const validateCreateProductArgs = createValidator<
  MutationCreateProductArgs
>({
  product: yup.object<CreateProductInput>({
    department: departmentShape.required(),
    brand: yup.string().required(),
    name: yup.string().required(),
    description: yup.string(),
    price: yup.number().required(),
    quantity: yup.number().required(),
    discount: shapeOf(Discount),
    discountRange: yup.object<DiscountRange>({
      start: yup.date().required(),
      end: yup.date().required(),
    }),

    availability: shapeOf(Availability),
    rating: shapeOf(Rating),
    tags: yup.mixed<string[]>().required(),
    images: yup.mixed<string[]>().required(),
  }),
});

export const validateUpdateProductArgs = createValidator<
  MutationUpdateProductArgs
>({
  product: yup.object<UpdateProductInput>({
    id: uuidShape.required(),
    department: departmentShape,
    brand: yup.string(),
    name: yup.string(),
    description: yup.string(),
    price: yup.number(),
    quantity: yup.number(),
    discount: shapeOf(Discount),
    discountRange: yup.object<DiscountRange>({
      start: yup.date(),
      end: yup.date(),
    }),

    availability: shapeOf(Availability),
    rating: shapeOf(Rating),
    tags: yup.mixed<string[]>(),
    images: yup.mixed<string[]>(),
  }),
});

export const validateDeleteProductArgs = createValidator<
  MutationDeleteProductArgs
>({
  id: uuidShape.required(),
});
