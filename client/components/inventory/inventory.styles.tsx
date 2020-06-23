import { Form } from 'formik';
import styled from 'styled-components';

export const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InventoryInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 50em;

  > form,
  > button {
    margin-bottom: 1em;
    width: 100%;
  }
`;

export const InventoryForm = styled(Form)<{ submitting: string }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: space-between;
  justify-content: center;

  padding-top: ${(props) => (props.submitting === 'true' ? '0em' : '1.25em')};

  > div {
    margin: 1em;
    min-width: 20em;
  }
`;

export const InventoryTagsContainer = styled.div`
  width: 42em;
`;
export const InventoryTagsInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: space-between;
  justify-content: flex-start;
`;

export const InventoryTagHeader = styled.h5`
  text-align: left;
  font-size: 0.9em;

  margin: 0em;
  padding-bottom: 0.5em;

  color: ${(props) => props.theme.palette.secondary};
  border-bottom: 0.1em solid ${(props) => props.theme.palette.border.main};
`;

export const InventoryTag = styled.div`
  margin-right: 0.5em;

  input {
    width: 9em;
  }
`;
