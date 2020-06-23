import styled from 'styled-components';

interface IDivider {
  width: number;
  margin: number;
}
export const Divider = styled.hr<IDivider>`
  width: ${(props): number => props.width || 100}%;
  margin: ${(props): number => props.margin || 1}em;

  color: ${(props): string => props.theme.palette.divider.main};
`;
