// @flow

import React from 'react';
import Select from 'react-select';
import { Formik, Form, Field } from 'formik';

const pets = [
  {
    label: 'Dog',
    value: 'dog'
  },
  {
    label: 'Cat',
    value: 'cat'
  }
]

const FormikReactSelect = () => (
  <Formik
    initialValues={{pet: pets[0]}}
    onSubmit={(formData) => console.log(formData)}
  >
    {formProps => (
      <Form data-testid="pet-form">
        <label htmlFor="pet">Select pet</label>
        <Field
          name="pet"
          inputId="pet"
          as={Select}
          options={pets}
          value={formProps.values.pet}
          onChange={(selectedOption) => {
            formProps.setFieldValue('pet', selectedOption);
          }}
        />
      </Form>
    )}
  </Formik>
)

export default FormikReactSelect;
