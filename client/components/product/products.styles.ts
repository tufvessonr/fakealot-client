import { Modal, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const BrowseProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 1em;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  margin: 1em;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 18em;
  height: 25em;
  margin: 0.5em;

  overflow: hidden;

  border-radius: 0.5em 0.5em 0em 0em;

  font-size: 0.8em;

  &:hover {
    div.image-box {
      opacity: 1;

      filter: grayscale(0);
      transform: scale(1.25);
    }

    button {
      transition: 0.3s ease;
      -webkit-transition: 0.3s ease;
      opacity: 0.85;
    }
  }

  border-radius: 0.5em;
  -webkit-box-shadow: 0em 0em 8px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0em 0em 8px rgba(0, 0, 0, 0.3);
  box-shadow: 0em 0em 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 90;
`;

export const ProductCardImageBox = styled.div`
  width: 90%;
  height: 20em;
  max-height: 10em;

  overflow: hidden;
`;

export const ProductCardImage = styled.div<{ imageUrl: string }>`
  width: 80%;
  height: 100%;

  margin: auto;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;

  outline: none;
  overflow: hidden;

  opacity: 0.9;

  transition: transform 0.3s cubic-bezier(0, 0.45, 0.45, 1);
  filter: grayscale(50%);
`;

export const ProductCardQuickView = styled.button`
  position: relative;
  top: -1.8em;
  width: 100%;

  padding: 0.35em 0em;

  border: none;
  border-radius: 0em;
  background-color: ${(props) => props.theme.palette.secondaryHover};

  font-size: 0.8em;
  font-weight: bold;
  color: white;

  opacity: 0;

  outline: none;

  &:hover {
    transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    background-color: ${(props) => props.theme.palette.primary};
    background-color: ${(props) => props.theme.palette.button.green};
  }
`;

export const ProductCardBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 0.4em;
`;

export const ProductCardName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;

  height: 6em;
  width: 80%;

  padding: 0em 1em;
  margin-bottom: 0.75em;
`;

export const ProductCardPriceBar = styled.div<{ hasDiscount: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.hasDiscount === 'true' ? 'space-between' : 'center'};

  width: 80%;
  margin-bottom: 0.5em;
  padding: 0em 2em 0.5em 2em;
`;

export const ProductCardPrice = styled.div`
  font-size: 1.5em;
  font-weight: bold;

  color: ${(props) => props.theme.palette.secondary};

  &.discount {
    color: ${(props) => props.theme.palette.discount};
  }

  &.discounted {
    font-size: 1em;
    text-decoration: line-through;
  }
`;

export const ProductCardRating = styled.span`
  font-size: 2em;
`;

export const CornerRibbon = styled.div`
  width: 7em;
  height: 7em;
  overflow: hidden;
  position: absolute;
  top: -0.6em;
  right: -0.6em;
  z-index: 99;
`;

export const CornerRibbonText = styled.div`
  position: relative;
  padding: 0.5em 0;
  left: -3.5em;
  top: 1.6em;
  width: 14em;

  text-align: center;

  font-weight: bold;
  color: ${(props) => props.theme.palette.ribbon.discount.text};

  text-shadow: rgba(255, 255, 255, 0.5) 0em 1px 0em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);

  background-color: ${(props) =>
    props.theme.palette.ribbon.discount.background};
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    ${(props) => {
      const ribbon = props.theme.palette.ribbon.discount;
      return `from(${ribbon.background}), to(${ribbon.gradient})`;
    }}
  );
  background-image: -webkit-linear-gradient(
    top,
    ${(props) => {
      const ribbon = props.theme.palette.ribbon.discount;
      return `${ribbon.background}, ${ribbon.gradient}`;
    }}
  );
  background-image: -moz-linear-gradient(
    top,
    ${(props) => {
      const ribbon = props.theme.palette.ribbon.discount;
      return `${ribbon.background}, ${ribbon.gradient}`;
    }}5
  );
  background-image: -ms-linear-gradient(
    top,
    ${(props) => {
      const ribbon = props.theme.palette.ribbon.discount;
      return `${ribbon.background}, ${ribbon.gradient}`;
    }}
  );
  background-image: -o-linear-gradient(
    top,
    ${(props) => {
      const ribbon = props.theme.palette.ribbon.discount;
      return `${ribbon.background}, ${ribbon.gradient}`;
    }}
  );

  -webkit-box-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.3);
  box-shadow: 0em 0em 0.3em rgba(0, 0, 0, 0.3);

  &:before,
  &:after {
    position: absolute;
    bottom: -0.3em;

    border-top: 0.3em solid ${(props) => props.theme.palette.border.main};
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;

    content: '';
  }

  &:before {
    left: 0;
  }
  .&:after {
    right: 0;
  }
`;

export const ProductPreviewModal = styled(Modal)`
  width: 50em;
  height: 40em;

  margin: auto;
`;
export const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  background: white;

  border-radius: 1em;

  padding: 1em;
`;
export const ProductPreviewImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15em;
`;
export const ProductPreviewImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;

  margin: auto;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;

  outline: none;
  overflow: hidden;
`;

export const ProductPreviewContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 30em;

  > div {
    margin: 1em 0.5em 0em;
  }
`;
export const ProductPreviewBrand = styled.div``;
export const ProductPreviewName = styled.div``;
export const ProductPreviewDescription = styled.div``;
export const ProductPreviewRating = styled.div`
  font-size: 1em;
`;
export const ProductPreviewPrice = styled.div``;
export const ProductPreviewFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button,
  .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
    max-height: 3em;
    padding: 0;
    margin: 0;
  }
  button {
    padding: 0.25em 0.5em;
  }
  .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
    max-height: 2.5em;
  }

  .MuiInputLabel-formControl {
    top: -0.6em;
  }
`;
export const ProductPreviewQuantityContainer = styled.div`
  width: 10em;
  margin-right: 1em;
`;
export const ProductPreviewQuantity = styled(TextField)``;
