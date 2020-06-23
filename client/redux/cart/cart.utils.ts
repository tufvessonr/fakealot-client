import { ICartItem } from '../../types/cart/cart.types';

export const addItemToCart = (
  cartItems: ICartItem[],
  cartItemToAdd: ICartItem
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  console.log(`Existing: `, existingCartItem, `To add: `, cartItemToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
        : cartItem
    );
  }

  return [...cartItems, cartItemToAdd];
};

export const removeItemFromCart = (
  cartItems: ICartItem[],
  cartItemToRemove: ICartItem
): ICartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (!existingCartItem) {
    return cartItems;
  }

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
