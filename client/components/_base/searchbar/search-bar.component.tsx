import styled from 'styled-components';

import { SearchInput } from '../header/search-input.component';

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 4.5em;

  margin: auto;
  margin-bottom: 2em;
`;

const SearchBarRow = styled.div`
  width: 100%;
`;

interface ISubMenu {
  options: number;
}
const SubMenu = styled.div<ISubMenu>`
  display: flex;

  width: 100%;
  height: 100%;

  align-items: center;

  button {
    width: ${(props) => 100 / props.options}%;
  }
`;

const SubMenuOption = styled.button`
  border: none;
  background-color: white;
  color: #666;

  &:hover {
    color: #69cbc5;
  }
`;

interface ISearchBarProps {
  submenus: string[];
}

export const SearchBar: React.FC<ISearchBarProps> = (
  props: ISearchBarProps
): JSX.Element => (
  <SearchBarContainer>
    <SearchBarRow>
      <SearchInput />
    </SearchBarRow>
    <SearchBarRow>
      <SubMenu options={props.submenus.length}>
        {props.submenus.map((submenu, key: number) => (
          <SubMenuOption key={`submenu_${key}`}>{submenu}</SubMenuOption>
        ))}
      </SubMenu>
    </SearchBarRow>
  </SearchBarContainer>
);
