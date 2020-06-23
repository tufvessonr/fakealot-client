import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20em;
  height: 22em;

  border: 0.1em solid ${(props) => props.theme.palette.border.main};
  background-color: white;
`;

export const CartDropdownItems = styled.div`
  display: flex;
  flex-direction: column;

  height: 19.6em;

  overflow: scroll;
  overflow-x: hidden;
`;

export const CartDropdownEmptyMessages = styled.span`
  margin: 1em auto;
`;

export const CartDropdownFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1em;
`;

export const CartDropdownTotal = styled.div`
  font-weight: bold;
  font-size: 1.2em;

  color: ${(props) => props.theme.palette.primary};
`;

export const CartDropdownButton = styled(Button)`
  background: ${(props) => props.theme.palette.button.green};
  color: ${(props): string => props.theme.palette.button.text};

  padding: 0.5em 1em;

  border-radius: 2em;

  &:hover {
    background: ${(props) => props.theme.palette.button.greenHover};
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 5em;

  padding: 0em 0em 0em 1em;
  margin-bottom: 0.75em;
`;

export const CartItemImage = styled.img`
  width: 3em;
  height: 3em;
`;

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 70%;

  padding: 0.5em 1em;

  .name {
    font-weight: bold;
  }
`;
