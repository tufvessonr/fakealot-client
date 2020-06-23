import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 85em;
  min-height: 95vh;
  margin: 0 auto;
  padding: 1em 2em;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;

  padding: 2em;
  // > div {
  //   border: 1px solid black;
  // }
`;

export const ContentSection = styled.div`
  flex: 4 1 0%;
`;

export const SidebarSection = styled.div`
  flex: 1 1 0%;
`;
