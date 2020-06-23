import DateFnsUtils from '@date-io/date-fns';
import { LinearProgress, MenuItem, IconButton } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Field, Formik, FormikProps, FieldArray } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { CustomButton } from '../_element/button.component';
import { Availability } from '../../types/product/product.types';
import {
  onFormikFieldChange,
  onFormikFieldKeyUp,
} from '../formik-utils/formik.utils';
import {
  InventoryContainer,
  InventoryForm,
  InventoryInnerContainer,
  InventoryTagsContainer,
  InventoryTag,
  InventoryTagsInnerContainer,
  InventoryTagHeader,
} from './inventory.styles';
import { ProductImageDropZone } from '../upload/dropzone.component';
import { FileThumbnails } from '../upload/files.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { RootAction } from '../../redux/store';
import { Dispatch } from 'redux';
import { addProduct } from '../../redux/inventory/inventory.actions';

interface AddProductValues {
  department: string;
  brand: string;
  name: string;
  price: number;
  discount: number;
  discountStart: Date;
  discountEnd: Date;
  availibility: string;
  tags: string[];
}

const AddProductSchema = Yup.object().shape({
  department: Yup.string()
    .min(2, 'Department is to short')
    .required('Required'),
  brand: Yup.string().min(2, 'Brand is to short').required('Required'),
  name: Yup.string().min(2, 'Name is to short').required('Required'),
  price: Yup.number().positive('Required').required('Required'),
  discount: Yup.number().oneOf(
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    'Please insert a valid discount'
  ),
  discountStart: Yup.date().nullable(),
  discountEnd: Yup.date().nullable(),
  availibility: Yup.string()
    .oneOf([
      Availability.NO_STOCK,
      Availability.ONE_MONTH,
      Availability.ONE_WEEK,
      Availability.THREE_DAYS,
      Availability.TWO_WEEKS,
    ])
    .nullable(),
  tags: Yup.array().of(Yup.string()),
});

export const AddInventory: React.FC = (): JSX.Element => {
  const today = new Date();
  return (
    <InventoryContainer>
      <InventoryInnerContainer>
        <Formik<AddProductValues>
          initialValues={{
            department: '',
            brand: '',
            name: '',
            price: 0,
            discount: 0,
            discountStart: today,
            discountEnd: today,
            availibility: Availability.NO_STOCK,
            tags: [],
          }}
          validationSchema={AddProductSchema}
          onSubmit={onSubmit}
        >
          {(formikProps: FormikProps<AddProductValues>): JSX.Element => {
            const { submitForm, isSubmitting } = formikProps;

            const onFieldChange = onFormikFieldChange(formikProps);
            const onFieldKeyUp = onFormikFieldKeyUp(formikProps);
            return (
              <InventoryForm submitting={`${isSubmitting}`}>
                {isSubmitting && <LinearProgress />}
                <Field
                  component={TextField}
                  type="text"
                  name="department"
                  label="Department"
                  inputProps={{
                    onChange: onFieldChange,
                    onBlur: onFieldChange,
                    onKeyUp: onFieldKeyUp,
                  }}
                />
                <Field
                  component={TextField}
                  type="text"
                  name="brand"
                  label="Brand"
                  inputProps={{
                    onChange: onFieldChange,
                    onBlur: onFieldChange,
                    onKeyUp: onFieldKeyUp,
                  }}
                />
                <Field
                  component={TextField}
                  type="text"
                  name="name"
                  label="Name"
                  inputProps={{
                    onChange: onFieldChange,
                    onBlur: onFieldChange,
                    onKeyUp: onFieldKeyUp,
                  }}
                />
                <Field
                  component={TextField}
                  type="number"
                  name="price"
                  label="Price (in cents)"
                  inputProps={{
                    min: 0,
                    onChange: onFieldChange,
                    onBlur: onFieldChange,
                    onKeyUp: onFieldKeyUp,
                  }}
                ></Field>
                <Field
                  component={TextField}
                  type="number"
                  name="discount"
                  label="Discount %"
                  inputProps={{
                    step: 5,
                    min: 0,
                    max: 60,
                    onChange: onFieldChange,
                    onBlur: onFieldChange,
                    onKeyUp: onFieldKeyUp,
                  }}
                ></Field>

                <Field
                  component={Select}
                  name="availibility"
                  label="Availability"
                  inputProps={{
                    id: 'availibility',
                  }}
                >
                  <MenuItem value={Availability.IN_STOCK}>In Stock</MenuItem>
                  <MenuItem value={Availability.NO_STOCK}>No Stock</MenuItem>
                  <MenuItem value={Availability.THREE_DAYS}>
                    Three Days
                  </MenuItem>
                  <MenuItem value={Availability.ONE_WEEK}>One Week</MenuItem>
                  <MenuItem value={Availability.TWO_WEEKS}>Two Weeks</MenuItem>
                  <MenuItem value={Availability.ONE_MONTH}>One Month</MenuItem>
                </Field>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    label="Discount start date"
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    value={formikProps.values.discountStart}
                    onChange={(
                      date: MaterialUiPickersDate,
                      value?: string | null | undefined
                    ): void =>
                      formikProps.setFieldValue('discountStart', value)
                    }
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    label="Discount start date"
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    value={formikProps.values.discountEnd}
                    onChange={(
                      date: MaterialUiPickersDate,
                      value?: string | null | undefined
                    ): void => formikProps.setFieldValue('discountEnd', value)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>

                <InventoryTagsContainer>
                  <InventoryTagHeader>Tags</InventoryTagHeader>
                  <FieldArray
                    name="tags"
                    render={(arrayHelpers) => (
                      <InventoryTagsInnerContainer>
                        {formikProps.values.tags.map((tag, index) => (
                          <InventoryTag key={index}>
                            <Field name={`tags.${index}`} />

                            <IconButton
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                height={5}
                                width={5}
                              />
                            </IconButton>
                          </InventoryTag>
                        ))}
                        <IconButton
                          type="button"
                          onClick={() => arrayHelpers.push('')}
                          disabled={formikProps.values.tags.some(
                            (tag) => tag === ''
                          )}
                        >
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            height={5}
                            width={5}
                          />
                        </IconButton>
                      </InventoryTagsInnerContainer>
                    )}
                  />
                </InventoryTagsContainer>

                <CustomButton
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  CREATE PRODUCT
                </CustomButton>
              </InventoryForm>
            );
          }}
        </Formik>

        <ProductImageDropZone
          disabled={true}
          disabledText={`Disabled: Please create product first`}
        />
        <FileThumbnails />
      </InventoryInnerContainer>
    </InventoryContainer>
  );
};

const onSubmit = async (values: AddProductValues): Promise<void> => {
  const dispatch = useDispatch<Dispatch<RootAction>>();

  const {
    department,
    brand,
    name,
    price,
    availibility,
    discount,
    discountEnd,
    discountStart,
    tags,
  } = values;

  addProduct({
    department: {},
    availability,
    brand,
    description,
    discount,
    name,
    price,
    quantity,
    rating,
    tags,
    discountRange,
    images: [],
  })(dispatch);

  console.log(values);
};
