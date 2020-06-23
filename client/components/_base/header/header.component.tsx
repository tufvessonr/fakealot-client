import { useSelector } from 'react-redux';

import { SearchField } from '../../_element/search-field.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { AccountDropdown } from './account-dropdown.component';
import { CartDropdown } from './cart-dropdown.component';
import {
  HeaderContainer,
  HeaderLinkOption,
  HeaderLogo,
  HeaderOption,
  HeaderOptions,
} from './header.styles';
import { Route } from '../../../constants';

export const Header: React.FC = (): JSX.Element => {
  const currentUser = useSelector(selectCurrentUser);

  const onSearch = (): void => {
    console.log('on search');
  };

  return (
    <HeaderContainer>
      <HeaderLogo href={Route.Root}>
        <img src="/fakealot-logo.svg" alt="placeholder" />
      </HeaderLogo>
      <HeaderOptions>
        <SearchField
          width={10}
          placeholder="Search for products..."
          expand={17.5}
          onSearch={onSearch}
        />

        <HeaderOption>
          <AccountDropdown currentUser={currentUser} />
        </HeaderOption>
        <HeaderLinkOption href={Route.Browse}>
          <img src="/wish-list.svg" alt="placeholder" />
        </HeaderLinkOption>
        <HeaderOption>
          <CartDropdown />
        </HeaderOption>
        {/* <HeaderOption>
          <img
            src="/cart.svg"
            alt="placeholder"
            onClick={onCartClick}
            onKeyUp={onCartClick}
            role="presentation"
          />
        </HeaderOption>
        {hiddenCart ? null : <CartDropdown />} */}
      </HeaderOptions>
    </HeaderContainer>
  );
};
