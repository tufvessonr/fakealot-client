import { createValidator } from './validation';
import * as yup from 'yup';
import {
  QueryProductImagesArgs,
  MutationUploadProductImageArgs,
} from '../generated-types';
import { uuidShape } from '../../lib/yup-utils';

// Queries
export const validateProductImagesArgs = createValidator<
  QueryProductImagesArgs
>({
  id: uuidShape.required(),
});

// Mutations
export const validateUploadProductImageArgs = createValidator<
  MutationUploadProductImageArgs
>({
  id: uuidShape.required(),
  file: yup.object().required(),
});
