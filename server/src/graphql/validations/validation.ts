import * as yup from 'yup';

export type ShapeDefinition<T> = { [field in keyof T]?: yup.Schema<any> };
export type ValidatorOptions = { flattenDepth?: number };
export type Validator<TOutput = any, TInput = any> = (
  input: TInput
) => Promise<TOutput>;

export const SHAPE = Symbol.for('shape');

export function defineShape<T = any>(type: any, shape: yup.Schema<T>) {
  if (Object.getOwnPropertySymbols(type).includes(SHAPE)) {
    throw new Error(`Shape already defined on type '${type}'.`);
  }
  type[SHAPE] = shape;
}

export function defineShapeOfEnum(type: any) {
  const values = Object.values(type);
  defineShape(
    type,
    yup
      .string()
      .test(
        'enum',
        `\${path} must contain one of ['${values.join("','")}']`,
        (v) => (v ? values.includes(v) : true)
      )
  );
}

export function shapeOf<T = any>(type: any): yup.Schema<T> {
  const shape = type[SHAPE];
  if (!shape) {
    throw new Error(`No shape defined on type '${type}'.`);
  }
  return shape;
}

export function createValidator<T = any>(
  shape: ShapeDefinition<T>,
  options: ValidatorOptions = {}
): Validator<T> {
  return createValidatorFunction(yup.object(shape as any).noUnknown(), options);
}

function createValidatorFunction<T>(
  schema: yup.Schema<T>,
  { flattenDepth = 0 }: ValidatorOptions = {}
) {
  return async function <T>(input: any): Promise<T> {
    try {
      return (await schema.validate(input, {
        abortEarly: false,
        stripUnknown: true,
      })) as any;
    } catch (error) {
      if (error.name !== 'ValidationError') {
        throw error;
      }
      // Convert yup errors to validation helper errors. TODO: refactor validationhelper
      const errors = (error.inner.length > 0
        ? error.inner
        : [error]) as yup.ValidationError[];
      const failures = errors.map((e) => {
        let field = e.path || '';

        if (flattenDepth > 0) {
          field = field.split('.').slice(flattenDepth).join('.');
        }

        const failure: IValidationFailure = {
          type: 'INVALID',
          field,
          message: e.message || `Field '${field}' is invalid`,
          feedback: e.message || `Field '${field}' is invalid`,
        };
        return failure;
      });
      const e = new ValidationError(failures);
      throw e;
    }
  };
}

export class ValidationError extends Error {
  readonly failures: ReadonlyArray<IValidationFailure>;

  constructor(failure: ReadonlyArray<IValidationFailure> | IValidationFailure) {
    const failures: any[] = [].concat(failure as any);

    super(`Validation failure: ${failures.map((f) => f.message).join('\n')}`);

    this.failures = failures.map(({ field, message, type }) => {
      return {
        field,
        message,
        feedback: formatValidationFailureFeedback(message as string),
        type,
      };
    });
    this.name = 'ValidationError';
  }

  toString() {
    return `Validation failure: ${this.failures
      .map((f) => f.message)
      .join('\n')}`;
  }
}

export const formatValidationFailureFeedback = (message: string) => {
  if (!message) {
    return message;
  }
  return message
    .replace(/([a-zA-Z]+\.){1,}([a-z]){1}/g, '$2')
    .replace(/\.[^ ]/g, ' ')
    .replace(/^[a-z]|[A-Z]/g, (v, i) =>
      i === 0 ? v.toUpperCase() : ` ${v.toLowerCase()}`
    )
    .replace(/ {2,}/g, ' ')
    .replace(
      /\. ([a-z])/g,
      (v) =>
        `${v.substring(0, v.length - 1)}${v
          .substring(v.length - 1)
          .toUpperCase()}`
    );
};

export interface IValidationFailure {
  type: 'ARGUMENT' | 'INVALID';
  field?: string;
  message: string;
  detail?: any;
  feedback?: string;
}
