// @flow

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';

import FormikReactSelectFetch from './formik-react-select-fetch';

test('Formik initialize the form values', async () => {
  global.fetch.mockResponse(
    JSON.stringify([
      {
        name: 'Peram',
        id: 1,
      },
      {
        name: 'Jai',
        id: 2,
      },
    ])
  );
  render(<FormikReactSelectFetch />);

  const userForm = await screen.findByTestId('user-form');

  expect(userForm).toHaveFormValues({ user: '1' });
});

test('should select value', async () => {
  global.fetch.mockResponse(
    JSON.stringify([
      {
        name: 'Peram',
        id: 1,
      },
      {
        name: 'Jai',
        id: 2,
      },
    ])
  );
  render(<FormikReactSelectFetch />);

  const userForm = await screen.findByTestId('user-form');

  expect(userForm).toHaveFormValues({ user: '1' });

  await selectEvent.select(screen.getByLabelText('Select user'), 'Jai');

  expect(userForm).toHaveFormValues({ user: '2' });
});

test('should submit the form', async () => {
  global.fetch.mockResponse(
    JSON.stringify([
      {
        name: 'Peram',
        id: 1,
      },
      {
        name: 'Jai',
        id: 2,
      },
    ])
  );
  render(<FormikReactSelectFetch />);

  const userForm = await screen.findByTestId('user-form');

  expect(userForm).toHaveFormValues({ user: '1' });

  await selectEvent.select(screen.getByLabelText('Select user'), 'Jai');
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => {
    expect(userForm).toHaveFormValues({ user: '2' });
  });
});
