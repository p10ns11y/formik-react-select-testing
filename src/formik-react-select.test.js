// @flow

import React from 'react';
import { render, act } from '@testing-library/react';
import selectEvent from 'react-select-event';

import FormikReactSelect from './fromik-react-select';

test('Formik initialize the form values', async () => {
  const { getByTestId } = render(<FormikReactSelect />);

  const petForm = getByTestId('pet-form')

  expect(petForm).toHaveFormValues({ pet: 'dog' });
});

test('should select value', async () => {
  const { getByTestId, getByLabelText } = render(<FormikReactSelect />);

  const petForm = getByTestId('pet-form')

  expect(petForm).toHaveFormValues({ pet: 'dog' });

  await act(async () => {
    await selectEvent.select(getByLabelText('Select pet'), 'Cat')
  })

  expect(petForm).toHaveFormValues({ pet: 'cat' });
});
