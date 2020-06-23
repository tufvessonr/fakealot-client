import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const CheckoutInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40em;
`;

export const CheckoutItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  border-bottom: 0.1em solid ${(props) => props.theme.palette.border.main};

  svg {
    color: ${(props) => props.theme.palette.primary};
    font-size: 1.5em;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 4em;
  margin: 1em;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemName = styled.span`
  width: 30em;
`;

export const CheckoutItemQuantity = styled.div`
  display: flex;
  justify-content: space-between;

  width: 7em;
  margin: 0em 1em;

  div {
    cursor: pointer;
  }
`;

export const CheckoutItemPrice = styled.div`
  width: 8em;
`;

export const CheckoutRemoveItemContainer = styled.div`
  padding-left: 2em;
  cursor: pointer;
`;

export const CheckoutControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  padding: 1em;
`;
