import styled from 'styled-components';

import { Link } from './link.component';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 4.5em;
  width: 100%;

  margin-bottom: 2em;
`;

export const HeaderLogo = styled(Link)`
  height: 100%;
  width: 4.5em;
  padding: 0.5em;
`;

export const HeaderOptions = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderOption = styled.div`
  padding: 0.5em;

  img {
    height: 2.5em;
    width: 2.5em;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const HeaderLinkOption = styled(Link)`
  padding: 0.5em;

  img {
    height: 2.5em;
    width: 2.5em;

    &:hover {
      opacity: 0.7;
    }
  }
`;
