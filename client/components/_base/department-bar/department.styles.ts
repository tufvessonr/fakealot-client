import styled from 'styled-components';

export const DepartmentBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0em 2em 1em 2em;

  border-bottom: 1px solid ${(props) => props.theme.palette.divider.main};
`;

export const DepartmentBarOption = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme.palette.department.menu.color};

  &:hover {
    color: ${(props) => props.theme.palette.department.menu.hover};
  }
`;
