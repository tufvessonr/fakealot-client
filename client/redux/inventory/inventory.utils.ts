import { IProduct } from '../../types/product/product.types';

export const addProduct = (
  products: IProduct[],
  productToAdd?: IProduct
): IProduct[] => {
  if (!productToAdd) {
    return products;
  }

  const existingProduct = products.find(
    (product) => product.id === productToAdd.id
  );
  if (existingProduct) {
    return products;
  }
  products.push(productToAdd);
  return products;
};

export const editProduct = (
  products: IProduct[],
  editedProduct?: IProduct
): IProduct[] => {
  if (!editedProduct) {
    return products;
  }

  const updatedProducts = products.reduce((products, product) => {
    const existingProduct = product.id === editedProduct.id;
    if (existingProduct) {
      const updatedProduct = {
        ...product,
        ...editedProduct,
      };
      products.push(updatedProduct);
      return products;
    }

    products.push(product);
    return products;
  }, [] as IProduct[]);

  return updatedProducts;
};

export const removeProduct = (
  products: IProduct[],
  productToRemove?: IProduct
): IProduct[] => {
  if (!productToRemove) {
    return products;
  }

  const updatedProducts = products.reduce((products, product) => {
    const existingProduct = product.id === productToRemove.id;
    if (existingProduct) {
      return products;
    }

    products.push(product);
    return products;
  }, [] as IProduct[]);

  return updatedProducts;
};
