import { Discount } from '../types/product/product.types';

export const readableDiscount = (discount: Discount): string => {
  return `${discount} %`;
};

export const getDiscountedPrice = (
  price: number,
  discount: Discount,
  minorUnits = true
): number => {
  if (minorUnits) {
    price = price / 100;
  }
  return price - price * (discount / 100);
};
