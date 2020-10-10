import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { Button, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';
import styled from 'styled-components/native';
import FormikTextInput from './FormikTestInput';
import useSignUp from '../hooks/useSignUp';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
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
  username: yup.string().min(1).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  // passwordConfirm: yup
  //   .string()
  //   .oneOf([yup.ref('password'), null], "Passwords don't match")
  //   .required('Password must be confirmed'),
});

export const SignUpForm = ({ onSubmit }) => {
  return (
    <StyledView>
      <StyledFormikInputField name='username' placeholder='username' />
      <StyledFormikInputField
        name='password'
        placeholder='password'
        secureTextEntry
      />
      <StyledFormikInputField
        name='passwordConfirmation'
        placeholder='password confirmation'
        secureTextEntry
      />
      <ErrorMessage name='passwordConfirmation' />
      <TouchableWithoutFeedback>
        <Button
          title='Sign up'
          onPress={onSubmit}
          style={{ borderRadius: '5px' }}
        />
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export const SignUp = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUpContainer = ({}) => {
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUp onSubmit={onSubmit} />;
};

export default SignUpContainer;
