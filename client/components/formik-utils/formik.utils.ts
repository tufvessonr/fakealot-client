import { FormikProps } from 'formik';

export const onFormikFieldChange = <T>(
  formik: FormikProps<T>,
  callback?: () => Promise<void>
) => ({ target }: React.BaseSyntheticEvent): void => {
  const field = target.name;
  const helper = formik.getFieldHelpers(field);
  if (target.value === '') {
    helper.setTouched(false);
    helper.setError(null);
  } else {
    helper.setTouched(true);
    formik.validateField(field);
  }

  if (callback) {
    callback();
  }
};

export const onFormikFieldKeyUp = <T>(formik: FormikProps<T>) => (
  event: React.KeyboardEvent<HTMLInputElement>
): void => {
  if (event.keyCode === 13) {
    formik.submitForm();
  }
};
