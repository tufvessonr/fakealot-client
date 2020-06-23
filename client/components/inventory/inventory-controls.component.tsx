import styled from 'styled-components';

import { CustomButton } from '../_element/button.component';
import { SearchField } from '../_element/search-field.component';
import { Route } from '../../constants';
import { AppEventRoute } from '../../utils/routing.utils';

const InventoryControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0em 1em;
`;
const InventoryControlOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
interface IInventoryControls {
  onSearch: (keyword: string) => unknown;
}
export const InventoryControls: React.FC<IInventoryControls> = ({
  onSearch,
}): JSX.Element => {
  return (
    <InventoryControlContainer>
      <SearchField
        width={10}
        placeholder="Filter products..."
        onSearch={onSearch}
        searchOnInput={true}
      />
      <InventoryControlOptions>
        <CustomButton onClick={AppEventRoute(Route.AddInventory)}>
          Add
        </CustomButton>
      </InventoryControlOptions>
    </InventoryControlContainer>
  );
};
