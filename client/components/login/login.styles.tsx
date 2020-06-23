import { Form } from 'formik';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 20em;

  > form,
  > button {
    margin-bottom: 1em;
    width: 100%;
  }
`;

export const LoginForm = styled(Form)<{ submitting: string }>`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  padding-top: ${(props) => (props.submitting === 'true' ? '0em' : '1.25em')};

  > div {
    margin-bottom: 1em;
  }
`;

export const LoginDivider = styled.hr`
  width: 80%;
  margin: 1em;
`;
