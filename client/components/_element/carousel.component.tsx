import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import { IProduct } from '../../types/product/product.types';

const CarouselCardContainer = styled(Carousel)`
  width: 100%;
`;
const CarouselCard = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CarouselCardImage = styled.img`
  height: 100%;

  flex: 2 1 5em;
`;

interface ICustomCarouselProps {
  products: IProduct[];
}
export const CustomCarousel: React.FC<ICustomCarouselProps> = ({
  products,
}): JSX.Element => {
  return (
    <CarouselCardContainer interval={30000}>
      {products.map(({ images: imageUrls }, index) => (
        <CarouselCard key={index}>
          <CarouselCardImage src={imageUrls[0]} />
        </CarouselCard>
      ))}
    </CarouselCardContainer>
  );
};
