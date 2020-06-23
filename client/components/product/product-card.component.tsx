import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';

import { IProduct } from '../../types/product/product.types';
import { formatCurrency } from '../../utils/currency.utils';
import {
  getDiscountedPrice,
  readableDiscount,
} from '../../utils/discount.util';
import { ProductPreview } from './product-preview.components';
import {
  CornerRibbon,
  CornerRibbonText,
  ProductCardBrand,
  ProductCardContainer,
  ProductCardImage,
  ProductCardImageBox,
  ProductCardName,
  ProductCardPrice,
  ProductCardPriceBar,
  ProductCardQuickView,
  ProductCardRating,
} from './products.styles';

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { brand, name, price, discount, images, rating } = product;
  const hasDiscount = discount !== 0;

  const [previewOpen, setPreviewOpen] = useState(false);

  const togglePreview = (): void => {
    setPreviewOpen(!previewOpen);
  };

  return (
    <ProductCardContainer>
      {hasDiscount && (
        <CornerRibbon>
          <CornerRibbonText>{readableDiscount(discount)} Off</CornerRibbonText>
        </CornerRibbon>
      )}
      <ProductCardImageBox>
        <ProductCardImage imageUrl={images[0]} className={`image-box`} />
      </ProductCardImageBox>
      <ProductCardQuickView onClick={togglePreview}>
        Quick View
      </ProductCardQuickView>
      <ProductCardBrand>{brand}</ProductCardBrand>
      <ProductCardName>{name}</ProductCardName>
      <ProductCardPriceBar hasDiscount={`${hasDiscount}`}>
        {hasDiscount ? (
          <>
            <ProductCardPrice className={'discount'}>
              {formatCurrency(getDiscountedPrice(price, discount), false)}
            </ProductCardPrice>
            <ProductCardPrice className={'discounted'}>
              {formatCurrency(price)}
            </ProductCardPrice>
          </>
        ) : (
          <ProductCardPrice>{formatCurrency(price)}</ProductCardPrice>
        )}
      </ProductCardPriceBar>
      <ProductCardRating>
        <Rating name="read-only" value={rating} readOnly />
      </ProductCardRating>
      {previewOpen && (
        <ProductPreview
          open={previewOpen}
          product={product}
          handleClose={togglePreview}
        />
      )}
    </ProductCardContainer>
  );
};
