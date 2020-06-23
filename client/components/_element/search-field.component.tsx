import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

interface IStyledTextField {
  expand: number;
  width: number;
}
const StyledTextField = styled(TextField)<IStyledTextField>`
  input {
    width: ${(props) => props.width}em;
    transition: width 0.5s ease-in;
  }

  && .MuiInputBase-input:focus {
    width: ${(props) => props.expand}em;
    transition: width 0.5s ease-out;
  }

  && .MuiInputBase-root,
  && .MuiInput-root:hover::before,
  && .MuiInput-root:hover::after {
    color: ${(props) => props.theme.palette.textfield.text};
    border-color: ${(props) => props.theme.palette.textfield.text};
  }
`;

interface ISearchFieldProps {
  placeholder?: string;
  expand?: number;
  width: number;

  onSearch: (keyword: string) => unknown;
  searchOnInput?: boolean;
}
export const SearchField: React.FC<ISearchFieldProps> = ({
  placeholder,
  expand,
  width,
  onSearch,
  searchOnInput,
}) => {
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyword = (event.target as HTMLTextAreaElement).value;
    if (event.keyCode === 13 || searchOnInput) {
      onSearch(keyword);
    }
  };

  return (
    <StyledTextField
      margin="normal"
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      expand={expand || width}
      width={width}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon height={5} width={5} />
          </InputAdornment>
        ),
      }}
    />
  );
};
