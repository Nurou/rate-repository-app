import React from 'react';
import styled from 'styled-components/native';
import { Text } from './Text';

const Review = styled.View`
  display: flex;
  flex-direction: row;
  padding: 30px;
  margin: 10px;
  background: white;
`;

const Content = styled.View`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;
const RatingContainer = styled.View`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  border: 2px solid blue;
  margin-right: 10px;
  color: blue;
`;

export const ReviewItem = ({ review, personal }) => {
  const {
    node: {
      createdAt,
      rating,
      text,
      user: { username },
      repository: { fullName },
    },
  } = review;

  return (
    <Review>
      <RatingContainer>
        <Text>{rating}</Text>
      </RatingContainer>
      <Content>
        <Text style={{ fontWeight: '700' }}>
          {personal ? fullName : username}
        </Text>
        <Text style={{ opacity: 0.7 }}>{createdAt.substring(0, 10)}</Text>
        <Text>{text}</Text>
      </Content>
    </Review>
  );
};
