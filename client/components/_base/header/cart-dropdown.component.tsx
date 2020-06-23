import Menu from '@material-ui/core/Menu';
import { curry, memoize } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Route } from '../../../constants';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { formatCurrency } from '../../../utils/currency.utils';
import { AppRoute } from '../../../utils/routing.utils';
import { CartItem } from '../../cart/cart-item.component';
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartDropdownEmptyMessages,
  CartDropdownFooter,
  CartDropdownItems,
  CartDropdownTotal,
} from '../../cart/cart.styles';

const StyledMenu = styled(Menu)`
  box-shadow: none;
  border: 1px solid #d3d4d5;

  padding: 0em;

  ul {
    padding: 0em;
  }

  li {
    padding: 0.25em 3.5em 0.25em 1.5em;

    &:hover {
      background-color: ${(props): string => props.theme.palette.primary}45;
    }
  }

  hr {
    width: 80%;
  }
`;

const CartButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  font: inherit;
`;

export const CartDropdown: React.FC = (): JSX.Element => {
  const cartItems = useSelector(selectCartItems);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const route = memoize(
    curry((path: string, event: React.MouseEvent<unknown, MouseEvent>) => {
      event.preventDefault();
      AppRoute(path);
      setAnchorEl(null);
    })
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const total = cartItems.reduce((total, { price, quantity }) => {
    return total + price * quantity;
  }, 0);

  return (
    <>
      <CartButton
        aria-controls={'profile_menu'}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src="/cart.svg" alt="placeholder" />
      </CartButton>

      <StyledMenu
        id="profile_menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <CartDropdownContainer>
          <CartDropdownItems>
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))
            ) : (
              <CartDropdownEmptyMessages>
                Your cart is empty
              </CartDropdownEmptyMessages>
            )}
          </CartDropdownItems>
          <CartDropdownFooter>
            <CartDropdownTotal>
              Total: {formatCurrency(total)}
            </CartDropdownTotal>
            <CartDropdownButton onClick={route(Route.Checkout)}>
              Check out
            </CartDropdownButton>
          </CartDropdownFooter>
        </CartDropdownContainer>
      </StyledMenu>
    </>
  );
};
