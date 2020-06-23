import Button from '@material-ui/core/Button';
import styled from 'styled-components';

interface ICustomStyledButton {
  secondary: 'true' | 'false';
}

const CustomStyledButton = styled(Button)<ICustomStyledButton>`
  background: ${(props): string =>
    props.secondary === 'true'
      ? props.theme.palette.secondary
      : props.theme.palette.primary};
  color: ${(props): string => props.theme.palette.button.text};

  padding: 0.5em 1em;

  &:hover {
    background: ${(props): string =>
      props.secondary === 'true'
        ? props.theme.palette.secondaryHover
        : props.theme.palette.primaryHover};
  }

  svg {
    margin-right: 1em;
  }
`;

interface ICustomButtonProps extends Record<string, unknown> {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  secondary?: 'true' | 'false';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  type,
  secondary,
  onClick,
}) => (
  <CustomStyledButton
    type={type}
    onClick={onClick}
    secondary={secondary || 'false'}
  >
    {children}
  </CustomStyledButton>
);
