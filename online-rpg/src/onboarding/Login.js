import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import StyledForm from './styles';

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const url = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const handleSubmit = (values) => {
    axios
      .post(`${url}api/login/`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledForm>
      <h1 className='title'>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form className='form'>
            <Field
              className='input'
              type='text'
              name='username'
              placeholder='Username'
            />
            <Field
              className='input'
              type='email'
              name='email'
              placeholder='Email'
            />
            <Field
              className='input'
              type='password'
              name='password'
              placeholder='Password'
            />
            <button className='submit-button' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default connect((state) => state)(Login);
