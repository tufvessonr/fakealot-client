import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinearProgress } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Field, Formik, FormikProps, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { Link } from '../_base/header/link.component';
import { CustomButton } from '../_element/button.component';
import { Route } from '../../constants';
import {
  authService,
  signInWithGoogle,
} from '../../hooks/firebase/firebase-utils';
import { AppEventRoute, AppRoute } from '../../utils/routing.utils';
import { onFormikFieldKeyUp } from '../formik-utils/formik.utils';
import {
  LoginContainer,
  LoginDivider,
  LoginForm,
  LoginInnerContainer,
} from './login.styles';

interface SigninValues {
  email: string;
  password: string;
}

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .max(30, 'Email is to long')
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .trim()
    .min(5, 'Must at least be 6 characters long')
    .max(30, 'Password is to long')
    .matches(/[A-Z]+/, 'Must at least contain 1 capital letter')
    .matches(
      /[!@#$?_-]+/,
      'Must at least contain 1 special character ( @#$?_-! )'
    )
    .matches(/[0-9]+/, 'Must at least contain 1 number')
    .required('Required'),
});

export const SignIn = (): JSX.Element => {
  const forgotPassword = `I have forgotten my password`;
  const noAccount = `Don't have an account?`;

  let submitting = false;
  let formik: FormikProps<SigninValues>;

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <Formik<SigninValues>
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SigninSchema}
          onSubmit={onSubmit}
        >
          {(formikProps: FormikProps<SigninValues>) => {
            formik = formikProps;
            const { submitForm, isSubmitting } = formikProps;
            submitting = isSubmitting;

            const onFieldKeyUp = onFormikFieldKeyUp(formik);
            return (
              <LoginForm submitting={`${submitting}`}>
                {submitting && <LinearProgress />}
                <Field
                  component={TextField}
                  type="email"
                  name="email"
                  label="Email"
                  autoComplete="email"
                  inputProps={{
                    onKeyUp: onFieldKeyUp,
                  }}
                />
                <Field
                  component={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="password"
                  inputProps={{
                    onKeyUp: onFieldKeyUp,
                  }}
                />
                <CustomButton
                  variant="contained"
                  disabled={submitting}
                  onClick={submitForm}
                >
                  LOGIN
                </CustomButton>
              </LoginForm>
            );
          }}
        </Formik>
        <Link href="/forgotPassword">
          <p>
            <InfoOutlinedIcon height={5} width={5} />
            {forgotPassword}
          </p>
        </Link>
        <LoginDivider />
        <CustomButton
          variant="contained"
          disabled={submitting}
          onClick={handleSigninViaGoogle}
        >
          <FontAwesomeIcon icon={faGoogle} height={5} width={5} />
          Login with Google
        </CustomButton>
        <LoginDivider />
        <p>{noAccount}</p>
        <CustomButton
          variant="contained"
          disabled={submitting}
          secondary="true"
          onClick={AppEventRoute(Route.SignUp)}
        >
          REGISTER FOR AN ACCOUNT
        </CustomButton>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

const onSubmit = async (values: FormikValues): Promise<void> => {
  const { email, password } = values;
  try {
    const { user } = await authService.signInWithEmailAndPassword(
      email,
      password
    );

    if (!user) {
      throw new Error('Failed to signin user!!!');
    }

    AppRoute(Route.Root);
  } catch (error) {
    console.error(error.code, error.message);
    // TODO: Add notification of failure
    throw error;
  }
};

const handleSigninViaGoogle = async (): Promise<void> => {
  const result = await signInWithGoogle();
  if (result.user) {
    AppRoute(Route.Account);
  }
};
