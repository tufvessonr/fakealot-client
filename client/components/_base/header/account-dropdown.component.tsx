import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBox from '@material-ui/icons/AccountBox';
import LockOpen from '@material-ui/icons/LockOpen';
import { curry, memoize } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { Route } from '../../../constants';
import { authService } from '../../../hooks/firebase/firebase-utils';
import { IUser } from '../../../redux/user/user.types';
import { AppEventRoute } from '../../../utils/routing.utils';

const StyledMenu = styled(Menu)`
  box-shadow: none;
  border: 1px solid #d3d4d5;

  li {
    padding: 0.25em 3.5em 0.25em 1.5em;

    &:hover {
      background-color: ${(props) => props.theme.palette.primary}45;
    }
  }

  hr {
    width: 80%;
  }
`;

const AccountButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  font: inherit;
`;

interface IAccountDropdownProps {
  currentUser: IUser | null;
}
export const AccountDropdown: React.FC<IAccountDropdownProps> = ({
  currentUser,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const router = useRouter();
  const route = memoize(
    curry((path: string, event: React.MouseEvent<unknown, MouseEvent>) => {
      event.preventDefault();
      router.push(path);
      setAnchorEl(null);
    })
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = async () => {
    console.log(`signout`);

    await authService.signOut();

    router.push(Route.Root);
    setAnchorEl(null);
  };

  return (
    <>
      <AccountButton
        aria-controls={'profile_menu'}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src="/account.svg" alt="placeholder" />
      </AccountButton>

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
        {!currentUser && (
          <MenuItem onClick={route(Route.SignIn)}>
            <ListItemIcon>
              <AccountBox fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </MenuItem>
        )}

        <MenuItem onClick={route(Route.Inventory)}>
          <ListItemIcon>
            <AccountBox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </MenuItem>

        {currentUser && (
          <MenuItem onClick={route(Route.Account)}>
            <ListItemIcon>
              <LockOpen fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </MenuItem>
        )}

        {currentUser && <hr />}

        {currentUser && (
          <MenuItem onClick={handleSignout}>
            <ListItemIcon>
              <AccountBox fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        )}
      </StyledMenu>
    </>
  );
};
