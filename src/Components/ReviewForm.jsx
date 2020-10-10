import { Formik } from 'formik';
import React from 'react';
import { Button, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';
import styled from 'styled-components/native';
import FormikTextInput from './FormikTestInput';
import useCreateReview from '../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: null,
  text: '',
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
  ownerName: yup.string().required(),
  repositoryName: yup.string().required(),
  rating: yup.number().required(),
  text: yup.string(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <StyledView>
      <StyledFormikInputField name='ownerName' placeholder='GitHub username' />
      <StyledFormikInputField
        name='repositoryName'
        placeholder='repository name'
      />
      <StyledFormikInputField name='rating' placeholder='rating' />
      <StyledFormikInputField
        multiline={true}
        name='text'
        placeholder='review'
      />
      <TouchableWithoutFeedback>
        <Button
          title='Create a review'
          onPress={onSubmit}
          style={{ borderRadius: '5px' }}
        />
      </TouchableWithoutFeedback>
    </StyledView>
  );
};

export const CreateReview = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export const CreateReviewContainer = ({}) => {
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    console.log(values);

    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <CreateReview onSubmit={onSubmit} />;
};

export default CreateReviewContainer;
