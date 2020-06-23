import { LinearProgress } from '@material-ui/core';
import { Field, Formik, FormikProps } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { CustomButton } from '../_element/button.component';
import { Route } from '../../constants';
import {
  authService,
  createUserProfileDoc,
} from '../../hooks/firebase/firebase-utils';
import { AppRoute } from '../../utils/routing.utils';
import {
  onFormikFieldChange,
  onFormikFieldKeyUp,
} from '../formik-utils/formik.utils';
import { LoginContainer, LoginForm, LoginInnerContainer } from './login.styles';

interface SignupValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is to short')
    .max(30, 'First name is to long')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Last name is to short')
    .max(30, 'Last name is to long')
    .required('Required'),
  email: Yup.string()
    .max(30, 'Email is to long')
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .trim()
    .min(5, 'Must at least be 5 characters long')
    .max(30, 'Password is to long')
    .matches(/[A-Z]+/, 'Must at least contain 1 capital letter')
    .matches(
      /[!@#$?_-]+/,
      'Must at least contain 1 special character ( @#$?_-! )'
    )
    .matches(/[0-9]+/, 'Must at least contain 1 number')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Required'),
});

export const SignUp: React.FC = (): JSX.Element => (
  <LoginContainer>
    <LoginInnerContainer>
      <Formik<SignupValues>
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {(formikProps: FormikProps<SignupValues>) => {
          const { submitForm, isSubmitting } = formikProps;

          const onFieldChange = onFormikFieldChange(formikProps);
          const onFieldKeyUp = onFormikFieldKeyUp(formikProps);
          return (
            <LoginForm submitting={`${isSubmitting}`}>
              {isSubmitting && <LinearProgress />}
              <Field
                component={TextField}
                type="text"
                name="firstName"
                label="First Name"
                inputProps={{
                  onChange: onFieldChange,
                  onBlur: onFieldChange,
                  onKeyUp: onFieldKeyUp,
                }}
              />
              <Field
                component={TextField}
                type="text"
                name="lastName"
                label="Last Name"
                inputProps={{
                  onChange: onFieldChange,
                  onBlur: onFieldChange,
                  onKeyUp: onFieldKeyUp,
                }}
              />
              <Field
                component={TextField}
                type="email"
                name="email"
                label="Email"
                autoComplete="email"
                inputProps={{
                  onChange: onFieldChange,
                  onBlur: onFieldChange,
                  onKeyUp: onFieldKeyUp,
                }}
              />
              <Field
                component={TextField}
                type="password"
                name="password"
                label="Password"
                inputProps={{
                  autoComplete: 'new-password',
                  onChange: onFieldChange,
                  onBlur: onFieldChange,
                  onKeyUp: onFieldKeyUp,
                }}
              ></Field>
              <Field
                component={TextField}
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                inputProps={{
                  autoComplete: 'new-password',
                  onChange: onFieldChange,
                  onBlur: onFieldChange,
                  onKeyUp: onFieldKeyUp,
                }}
              ></Field>
              <CustomButton
                variant="contained"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                CREATE ACCOUNT
              </CustomButton>
            </LoginForm>
          );
        }}
      </Formik>
    </LoginInnerContainer>
  </LoginContainer>
);

const onSubmit = async (values: SignupValues): Promise<void> => {
  const { email, password, firstName, lastName } = values;
  try {
    const { user } = await authService.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!user) {
      throw new Error('Failed to create user!!!');
    }

    await createUserProfileDoc(user, { firstName, lastName });

    AppRoute(Route.Root);
  } catch (error) {
    console.error(error.code, error.message);
    // TODO: Add notification of failure
    throw error;
  }
};
