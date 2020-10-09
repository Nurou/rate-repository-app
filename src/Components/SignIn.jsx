import { Formik } from 'formik';
import React from 'react';
import { Button, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';
import styled from 'styled-components/native';
import FormikTextInput from './FormikTestInput';
import useSignIn from '../hooks/useSignIn';

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
  min-height: 50px;
  padding: 20px;
  border-radius: 5px;
  margin: 15px 0;
`;

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username length must be greater than 3')
    .required(),
  password: yup
    .string()
    .min(3, 'Password length must be greater than 3')
    .required(),
});

export const SignInForm = ({ onSubmit }) => {
  return (
    <StyledView>
      <StyledFormikInputField
        testID='usernameField'
        name='username'
        placeholder='username'
      />
      <StyledFormikInputField
        testID='passwordField'
        name='password'
        placeholder='password'
        secureTextEntry
      />
      <TouchableWithoutFeedback>
        <Button
          testID='submitButton'
          title='Sign in'
          onPress={onSubmit}
          style={{ borderRadius: '5px' }}
        />
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export const SignIn = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignInContainer = ({}) => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <SignIn onSubmit={onSubmit} />;
};

export default SignInContainer;
