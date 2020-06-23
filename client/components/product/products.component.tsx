import { Pagination } from '@material-ui/lab';
import { useState } from 'react';

import { IProduct } from '../../types/product/product.types';
import { ProductCard } from './product-card.component';
import { BrowseProductsContainer, ProductsContainer } from './products.styles';

interface IBrowseProductsProps {
  products: IProduct[];
}
export const BrowseProducts: React.FC<IBrowseProductsProps> = ({
  products,
}) => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 10;
  const pages = Math.ceil(products.length / cardsPerPage);

  const onPagination = (e: React.ChangeEvent<unknown>, page: number): void => {
    e; // Silencing eslint
    setPage(page - 1);
  };

  return (
    <BrowseProductsContainer>
      <Pagination
        count={pages}
        shape="rounded"
        color="primary"
        onChange={onPagination}
      />
      <ProductsContainer>
        {products
          .slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)
          .map((product, key) => (
            <ProductCard key={`product_card_${key}`} product={product} />
          ))}
      </ProductsContainer>
    </BrowseProductsContainer>
  );
};
