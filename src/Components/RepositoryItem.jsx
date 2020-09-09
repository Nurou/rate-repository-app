import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import theme from '../theme';
import { Text as ThemeText } from './Text';

const StyledAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const InfoContainerWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const TextualInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Wrapper = styled.View`
  padding: 30px;
  margin: 15px;
  background: white;
`;

const Description = styled.Text`
  opacity: 0.7;
  margin-bottom: 8px;
`;
const Language = styled.Text`
  background: navy;
  color: white;
  border-radius: 4px;
  max-width: 80px;
  padding: 5px;
  margin-bottom: 8px;
`;

const RepoName = styled.Text`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Stats = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

const SingleStat = styled.View`
  display: flex;
  flex-direction: column;
`;

const thousandize = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : value;
};

const RepositoryItem = ({ repository }) => {
  const { ownerAvatarUrl } = repository;
  return (
    <Wrapper>
      <InfoContainerWrapper>
        <StyledAvatar source={{ uri: ownerAvatarUrl }} />
        <TextualInfo>
          <RepoName>{repository.fullName}</RepoName>
          <Description>{repository.description}</Description>
          <Language>{repository.language}</Language>
        </TextualInfo>
      </InfoContainerWrapper>
      <Stats>
        <SingleStat>
          <ThemeText fontWeight='bold'>
            {thousandize(repository.stargazersCount)}
          </ThemeText>
          <ThemeText color='textSecondary'>Stars</ThemeText>
        </SingleStat>
        <SingleStat>
          <ThemeText fontWeight='bold'>
            {thousandize(repository.forksCount)}
          </ThemeText>
          <ThemeText color='textSecondary'>Forks</ThemeText>
        </SingleStat>
        <SingleStat>
          <ThemeText fontWeight='bold'>
            {thousandize(repository.reviewCount)}
          </ThemeText>
          <ThemeText color='textSecondary'>Reviews</ThemeText>
        </SingleStat>
        <SingleStat>
          <ThemeText fontWeight='bold'>
            {thousandize(repository.ratingAverage)}
          </ThemeText>
          <ThemeText color='textSecondary'>Rating</ThemeText>
        </SingleStat>
      </Stats>
    </Wrapper>
  );
};

export default RepositoryItem;
