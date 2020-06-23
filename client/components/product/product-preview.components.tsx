import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { CustomButton } from '../_element/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { RootAction } from '../../redux/store';
import { IProduct } from '../../types/product/product.types';
import { formatCurrency } from '../../utils/currency.utils';
import {
  ProductPreviewBrand,
  ProductPreviewContainer,
  ProductPreviewContent,
  ProductPreviewDescription,
  ProductPreviewFooter,
  ProductPreviewImage,
  ProductPreviewImageBox,
  ProductPreviewModal,
  ProductPreviewName,
  ProductPreviewPrice,
  ProductPreviewQuantity,
  ProductPreviewQuantityContainer,
  ProductPreviewRating,
} from './products.styles';

interface IProductPreview {
  product: IProduct;
  open: boolean;
  handleClose: () => void;
}
export const ProductPreview: React.FC<IProductPreview> = ({
  product,
  open,
  handleClose,
}): JSX.Element => {
  const { id, images, brand, name, description, rating, price } = product;
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const dispatch = useDispatch<Dispatch<RootAction>>();

  const onQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(event.target.value);

    setQuantityToAdd(parseInt(event.target.value));
  };
  const onAddToCart = (): void => {
    addItem({
      id: id || '',
      image: images[0],
      price,
      quantity: quantityToAdd,
      name,
    })(dispatch);
    handleClose();
  };

  return (
    <ProductPreviewModal open={open} onClose={handleClose}>
      <ProductPreviewContainer>
        <ProductPreviewImageBox>
          <ProductPreviewImage imageUrl={images[0]} className={`image-box`} />
        </ProductPreviewImageBox>
        <ProductPreviewContent>
          <ProductPreviewBrand>{brand}</ProductPreviewBrand>
          <ProductPreviewName>{name}</ProductPreviewName>
          <ProductPreviewDescription>{description}</ProductPreviewDescription>
          <ProductPreviewRating>
            <Rating name="read-only" value={rating} readOnly />
          </ProductPreviewRating>
          <ProductPreviewPrice>{formatCurrency(price)}</ProductPreviewPrice>
          <ProductPreviewFooter>
            <ProductPreviewQuantityContainer>
              <ProductPreviewQuantity
                type="number"
                className={`preview-quantity`}
                label={`quantity`}
                variant="outlined"
                defaultValue={1}
                onChange={onQuantityChange}
              />
            </ProductPreviewQuantityContainer>
            <CustomButton onClick={onAddToCart}>
              <FontAwesomeIcon icon={faPlus} height={5} width={5} />
              Add to cart
            </CustomButton>
          </ProductPreviewFooter>
        </ProductPreviewContent>
      </ProductPreviewContainer>
    </ProductPreviewModal>
  );
};
