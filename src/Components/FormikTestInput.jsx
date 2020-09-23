import React from 'react';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import styled from 'styled-components/native';

const StyledErrorText = styled(Text)`
  margin: 5px 0;
  color: #d73a4a;
`;

const StyledTextInput = styled(TextInput)`
  border: 1px solid;
  border-color: ${(props) => (props.error ? '#d73a4a' : 'black')};
`;

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <StyledTextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <StyledErrorText>{meta.error}</StyledErrorText>}
    </>
  );
};

export default FormikTextInput;
