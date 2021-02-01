// @flow

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Formik, Form, Field } from 'formik';

const FormikReactSelectFetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  if (users.length === 0) {
    return 'loading';
  }

  return (
    <Formik
      initialValues={{ user: users[0] }}
      onSubmit={(formData) => console.log(formData)}
    >
      {(formProps) => (
        <Form data-testid="user-form">
          <label htmlFor="user">Select user</label>
          <Field
            name="user"
            inputId="user"
            as={Select}
            options={users}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            value={formProps.values.user}
            onChange={(selectedOption) => {
              formProps.setFieldValue('user', selectedOption);
            }}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikReactSelectFetch;
