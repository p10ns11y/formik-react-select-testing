// @flow

import React from 'react';
import { render, act } from '@testing-library/react';
import selectEvent from 'react-select-event';

import FormikReactSelectFetch from './formik-react-select-fetch';

test('Formik initialize the form values', async () => {
  global.fetch.mockResponse(JSON.stringify([
    {
      name: 'Peram',
      id: 1,
    },
    {
      name: 'Jai',
      id: 2
    }
  ]));
  const { findByTestId} = render(<FormikReactSelectFetch />);

  const userForm = await findByTestId('user-form')

  expect(userForm).toHaveFormValues({ user: "1" });
});

test('should select value', async () => {
  global.fetch.mockResponse(JSON.stringify([
    {
      name: 'Peram',
      id: 1,
    },
    {
      name: 'Jai',
      id: 2
    }
  ]));
  const { findByTestId, getByLabelText } = render(<FormikReactSelectFetch />);

  const userForm = await findByTestId('user-form')

  expect(userForm).toHaveFormValues({ user: "1" });

  await act(async () => {
    await selectEvent.select(getByLabelText('Select user'), 'Jai')
  })

  expect(userForm).toHaveFormValues({ user: "2" });
});
