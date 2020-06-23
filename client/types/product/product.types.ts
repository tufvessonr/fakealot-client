import { IDepartment } from '../department/department.types';

export enum Availability {
  THREE_DAYS = 'THREE_DAYS',
  ONE_WEEK = 'ONE_WEEK',
  TWO_WEEKS = 'TWO_WEEKS',
  ONE_MONTH = 'ONE_MONTH',
  NO_STOCK = 'NO_STOCK',
  IN_STOCK = 'IN_STOCK',
}

export type Discount =
  | 0
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60;
export type DiscountRange = {
  start: Date;
  end: Date;
};

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface IProduct {
  id?: string;
  department: IDepartment;
  tags: string[];

  brand: string;
  name: string;
  description: string;

  price: number;
  discount: Discount;
  discountRange?: DiscountRange;

  quantity: number;

  availability: Availability;

  rating: Rating;

  images: string[];
}
