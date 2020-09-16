import { Formik, useField } from 'formik';
import React from 'react';
import { Button, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';
import FormikTextInput from './FormikTestInput';
import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const StyledView = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const StyledFormikInputField = styled(FormikTextInput)`
  border: 1px black solid;
  min-height: 50px;
  padding: 20px;
  border-radius: 5px;
  margin: 15px 0;
`;

const SignInForm = ({ onSubmit }) => {
  return (
    <StyledView>
      <StyledFormikInputField name='username' placeholder='username' />
      <StyledFormikInputField
        name='password'
        placeholder='password'
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={() => onsubmit}>
        <Button title='Sign in' style={{ borderRadius: '5px' }} />
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

const SignIn = () => {
  const onSubmit = () => {
    console.log('signed in');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
