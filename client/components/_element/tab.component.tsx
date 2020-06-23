import styled from 'styled-components';

export const CustomTabContainer = styled.div`
  display: flex;
  flex-direction: colum;
`;

export const CustomTabOptions = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  width: 100%;

  padding: 0em 2em 1em 2em;

  border-bottom: 1px solid
    ${(props): string => props.theme.palette.divider.main};
`;

export const CustomTabOption = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props): string => props.theme.palette.department.menu.color};

  &:hover {
    color: ${(props): string => props.theme.palette.department.menu.hover};
  }
`;

export interface ICustomTabOption {
  value: string;
  onClick?: () => void;
}
interface ICustomTabs {
  name: string;
  options: ICustomTabOption[];
}
export const CustomTabs: React.FC<ICustomTabs> = ({
  name,
  options,
}): JSX.Element => {
  return (
    <CustomTabContainer>
      <CustomTabOptions>
        {options &&
          options.map((option, index) => (
            <CustomTabOption
              key={`tab_${name}_${index}`}
              onClick={option.onClick}
            >
              {option.value}
            </CustomTabOption>
          ))}
      </CustomTabOptions>
    </CustomTabContainer>
  );
};
