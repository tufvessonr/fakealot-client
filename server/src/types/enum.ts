import { defineShapeOfEnum } from '../graphql/validations/validation';

export enum Availability {
  THREE_DAYS = 'THREE_DAYS',
  ONE_WEEK = 'ONE_WEEK',
  TWO_WEEKS = 'TWO_WEEKS',
  ONE_MONTH = 'ONE_MONTH',
  NO_STOCK = 'NO_STOCK',
  IN_STOCK = 'IN_STOCK',
}
defineShapeOfEnum(Availability);

export enum Discount {
  ZERO = 'ZERO',
  FIVE = 'FIVE',
  TEN = 'TEN',
  FIFTEEN = 'FIFTEEN',
  TWENTY = 'TWENTY',
  TWENTY_FIVE = 'TWENTY_FIVE',
  THIRTY = 'THIRTY',
  THIRTY_FIVE = 'THIRTY_FIVE',
  FORTY = 'FORTY',
  FORTY_FIVE = 'FORTY_FIVE',
  FIFTY = 'FIFTY',
  FIFTY_FIVE = 'FIFTY_FIVE',
  SIXTY = 'SIXTY',
}
defineShapeOfEnum(Discount);

export enum Rating {
  NONE = 'NONE',
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}
defineShapeOfEnum(Rating);
